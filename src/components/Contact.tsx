/** @jsxImportSource react */ // Ensure proper JSX handling
'use client';

import {
    TextField,
    Button,
    TextareaAutosize,
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
        reset // Added reset here
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
                justifyContent: 'space-between',
                p: 2,
                border: '1px solid grey',
                flexDirection: 'column',
                width: '20%',
                gap: 2,
                maxWidth: 400
            }}
        >
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
                        <TextareaAutosize
                            {...field}
                            minRows={3}
                            placeholder="Your Message"
                            style={{
                                width: '90%',
                                padding: '18.5px 14px',
                                fontSize: '1rem',
                                fontFamily:
                                    '"Roboto","Helvetica","Arial",sans-serif',
                                borderRadius: '4px',
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
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
}
