import { TextField, Button, TextareaAutosize, Box } from '@mui/material';

export default function ContactSection() {
    return (
        <Box component="form" sx={{ display: 'flex',justifyContent:'space-between',p:2,border:'1px solid grey', flexDirection: 'column', width:'20%', gap: 2, maxWidth: 400
        }}>
            <TextField
                required
                label="Your Name"
                name="name"
                variant="outlined"
                fullWidth
            />
            <TextField
                required
                label="Your Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
            />
            <TextareaAutosize
                minRows={3}
                placeholder="Your Message"
                name="message"
                style={{ width: '90%', padding: '18.5px 14px', fontSize: '1rem', fontFamily: '"Roboto","Helvetica","Arial",sans-serif', borderRadius: '4px', borderColor: '#ced4da' }}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    )
}