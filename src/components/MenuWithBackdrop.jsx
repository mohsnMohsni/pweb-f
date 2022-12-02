import {
    List,
    Avatar,
    Backdrop,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemButton,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloudIcon from '@mui/icons-material/Cloud';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

export default function MenuWIthBackdrop({ open, setOpen }) {
    const menuItems = [
        { 'title': 'Download From Instagram', icon: <InstagramIcon sx={{ fontSize: '2vw' }} color='error' /> },
        { 'title': 'Download From SoundCloud', icon: <CloudIcon sx={{ fontSize: '2vw' }} color='warning' /> },
        { 'title': 'Download From Spotify', icon: <GraphicEqIcon sx={{ fontSize: '2vw' }} color="primary" /> },
    ]

    return (
        <Backdrop
            open={open}
            onClick={() => setOpen(false)}
        >
            <List dense sx={{}}>
                {menuItems.map(({ title, icon }, index) => {
                    const labelId = `checkbox-list-secondary-label-${title}`;
                    return (
                        <ListItem
                            key={index}
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt={`Avatar n°${index + 1}`} sx={{ height: '3vw', width: '3vw', margin: '0 15px' }}>
                                        {icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    id={labelId}
                                    primary={title}
                                    sx={{ fontSize: '3vw', fontFamily: 'fredoka-one' }}
                                    disableTypography
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Backdrop>
    )
}
