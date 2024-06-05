/** @jsxImportSource react */ // Ensure proper JSX handling
'use client';

import {
    TextField,
    Button,
    Grid ,
    Box,
    Typography
} from '@mui/material';
import sendEmail from './EmailSend/sendMail';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required')
});

export default function ContactSection() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: any) => {
        try {
            await sendEmail(data);
            alert('Message sent successfully');
            reset();
        } catch (error) {
            alert('An error occurred');
        }
    };

    return (
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2,
                    backgroundColor: 'rgba(250, 250, 250, 0.4)',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)'
                }}
            >
                <Typography variant="h5">
                    Contact Us
                </Typography>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            required
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name?.message as React.ReactNode}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            required
                            label="Your Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            error={!!errors.email}
                            helperText={errors.email?.message as React.ReactNode}
                        />
                    )}
                />
                <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <TextField
                                        {...field}
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={1}
                                        style={{
                                            borderColor: error ? 'red' : '#ced4da'
                                        }}
                                    />
                            {error && (
                                <Typography color="error" variant="caption">
                                    {error.message}
                                </Typography>
                            )}
                        </>
                    )}
                />
                <Button type="submit" variant="contained" color="success">
                    Submit
                </Button>
            </Box>

    );
}
