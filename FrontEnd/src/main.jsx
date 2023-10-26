import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp/index.jsx'
import { Home } from './pages/Home/index.jsx'
import { DeviceMenu } from './pages/DeviceMenu/index.jsx'
import { Details } from './pages/Details/index.jsx'
import { Routes } from './routes/index.jsx'

import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
