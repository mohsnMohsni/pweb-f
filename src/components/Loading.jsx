import { Box, LinearProgress } from '@mui/material'

export default function Loading() {
    return (
        <Box sx={{ position: 'absolute', width: '100%' }}>
            <LinearProgress color='info' />
        </Box>
    )

}
