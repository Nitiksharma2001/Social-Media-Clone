import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AddIcon from '@mui/icons-material/Add'
import { TextField } from '@mui/material'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function PostCard() {
  const [expanded, setExpanded] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleExpandClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setExpanded(!expanded)
      setIsLoading(false)
    }, 3000);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='194'
        image='data:image/jpeg;base64,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'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <TextField id='standard-basic' label='Comment' variant='standard' />
        <AddIcon />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          {isLoading && <HourglassBottomIcon />}
          <ExpandMoreIcon/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}