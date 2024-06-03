/** @jsxImportSource react */ // Ensure proper JSX handling
'use client';

import { TextField, Button, TextareaAutosize, Box } from '@mui/material';
import sendEmail from './EmailSend/sendMail';
import { useState } from 'react';

export default function ContactSection() {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [notif, setNotif] = useState({
        status: false,
        isError: false,
        message: ''
    });

    const hideNotif = () => {
        setTimeout(() => {
            setNotif({ ...notif, status: false });
        }, 2000);
    };

    const handleFormChange = (event: any) => {
        const { name, value } = event.target;
        setFormValue((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setNotif({
            status: true,
            isError: false,
            message: "Message en cours d'envoie !"
        });

        sendEmail(formValue)
            .then(() => {
                setNotif({
                    status: true,
                    isError: false,
                    message: 'Message envoyé avec succès'
                });
            })
            .catch(() => {
                setNotif({
                    status: true,
                    isError: true,
                    message: "Une erreur s'est produite"
                });
            })
            .finally(() => {
                hideNotif();
            });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
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
            <TextField
                required
                label="Your Name"
                name="name"
                variant="outlined"
                fullWidth
                value={formValue.name}
                onChange={handleFormChange}
            />
            <TextField
                required
                label="Your Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                value={formValue.email}
                onChange={handleFormChange}
            />
            <TextareaAutosize
                minRows={3}
                placeholder="Your Message"
                name="message"
                style={{
                    width: '90%',
                    padding: '18.5px 14px',
                    fontSize: '1rem',
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                    borderRadius: '4px',
                    borderColor: '#ced4da'
                }}
                value={formValue.message}
                onChange={handleFormChange}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
            {notif.status && (
                <div style={{ color: notif.isError ? 'red' : 'green' }}>
                    {notif.message}
                </div>
            )}
        </Box>
    );
}
