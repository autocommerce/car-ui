'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const appointmentSchema = z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email address'),
    date: z.date(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const contactSchema = z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().nonempty('Message is required'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function AppointmentPage() {
    const {
        handleSubmit: handleSubmitAppointment,
        control: controlAppointment,
        formState: { errors: errorsAppointment },
    } = useForm<AppointmentFormValues>({
        resolver: zodResolver(appointmentSchema),
    });

    const onSubmitAppointment = (data: AppointmentFormValues) => {
        console.log('Appointment Data:', data);
    };

    const {
        handleSubmit: handleSubmitContact,
        control: controlContact,
        formState: { errors: errorsContact },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmitContact = (data: ContactFormValues) => {
        console.log('Contact Data:', data);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                padding: 2,
                backgroundImage: 'url("https://www.shutterstock.com/image-photo/beautiful-receptionist-talking-on-phone-260nw-2090759692.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Appointment & Contact Us
            </Typography>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        onSubmit={handleSubmitContact(onSubmitContact)}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            padding: 3,
                            borderRadius: 2,
                            backgroundColor: 'rgba(250, 250, 250, 0.4)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
                        }}
                    >
                        <Typography variant="h5">Contact Us</Typography>
                        <Controller
                            name="name"
                            control={controlContact}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Name"
                                    variant="outlined"
                                    error={!!errorsContact.name}
                                    helperText={errorsContact.name ? errorsContact.name.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={controlContact}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    error={!!errorsContact.email}
                                    helperText={errorsContact.email ? errorsContact.email.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="message"
                            control={controlContact}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={1}
                                    error={!!errorsContact.message}
                                    helperText={errorsContact.message ? errorsContact.message.message : ''}
                                />
                            )}
                        />
                        <Button type="submit" variant="contained" color="success">
                            Send
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        onSubmit={handleSubmitAppointment(onSubmitAppointment)}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            backgroundColor: 'rgba(250, 250, 250, 0.4)',
                            padding: 3,
                            borderRadius: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
                        }}
                    >
                        <Typography variant="h5">Appointment Form</Typography>
                        <Controller
                            name="name"
                            control={controlAppointment}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Name"
                                    variant="outlined"
                                    error={!!errorsAppointment.name}
                                    helperText={errorsAppointment.name ? errorsAppointment.name.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={controlAppointment}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    error={!!errorsAppointment.email}
                                    helperText={errorsAppointment.email ? errorsAppointment.email.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="date"
                            control={controlAppointment}
                            render={({ field }) => (
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        {...field}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Date & Time"
                                                variant="outlined"
                                                error={!!errorsAppointment.date}
                                                helperText={errorsAppointment.date ? 'Date and time is required' : ''}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            )}
                        />
                        <Button type="submit" variant="contained" color="success">
                            Validate
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
