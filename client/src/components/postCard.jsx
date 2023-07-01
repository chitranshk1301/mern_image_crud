import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Badge from '@mui/material/Badge';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function PostCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={props.handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='flex gap-6 items-end justify-end'>
            {props.title}
            <Badge badgeContent={props.count} color="secondary" className='fixed'>
              <VisibilityIcon color="action" />
            </Badge>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
