import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Avatar from '@mui/material/Avatar'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded'
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded'
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'

const drawerWidth = 240

const Search = styled('div')(({ theme }) => ({
  marginRight: '0.5rem',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

export default function ResponsiveDrawer() {
  const { user } = useContext(UserContext)
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <img
        src="/img/preto.png"
        width={150}
        style={{ position: 'absolute', top: 0, padding: '1rem' }}
      />
      <List>
        {['Início', 'Shorts', 'Inscrições'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {(() => {
                  switch (index) {
                    case 0:
                      return <HomeRoundedIcon />
                    case 1:
                      return <LiveTvRoundedIcon />
                    case 2:
                      return <SubscriptionsRoundedIcon />
                    default:
                      return null
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar style={{ backgroundColor: 'white', boxShadow: 'none' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <IconButton>
            <VideoCallRoundedIcon />
          </IconButton>

          <IconButton>
            <AppsRoundedIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>

          <Tooltip title="Login">
            <Avatar
              alt="Remy Sharp"
              src="#"
              style={{ marginLeft: '1rem', cursor: 'pointer' }}
              onClick={() => router.push('/login')}
            />
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        {user && (
          <div>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
          </div>
        )}
      </Box>
    </Box>
  )
}
