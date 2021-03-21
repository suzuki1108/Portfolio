import React from 'react';
import {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import Link from '@material-ui/core/Link';
import top from './top.jpeg';
import Spring from './Spring.png';
import GAS from './GAS.png';
import ReactImg from './React.png';
import Gold from './Gold.gif';
import Silver from './Silver.gif';
import ButtonAppBar from './Header';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/suzuki1108">
        suzuki1108
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${top})`,
    backgroundColor:'rgba(255,255,255,0.3)',
    backgroundBlendMode:'lighten',
    backgroundRepeat: 'round',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  profileContent:{
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2, 4, 3),
  },
  profileImage: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  profileText:{
    textAlign:'center',
    paddingTop: '1.5%',
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
    return (
        <animated.div ref={ref} style={style} {...other}>
          {children}
        </animated.div>
    );
});

export default function Top() {
  const classes = useStyles();

  const [modalFlg,setModalFlg] = useState('');

  const [windowSize, setWindowSize] = useState(0);

  useEffect(()=>{
    setWindowSize(window.innerWidth);
  },[])

  useEffect(()=>{
   window.addEventListener("resize",()=>{
     setWindowSize(window.innerWidth);
   }) 
  });


  const cards = [{
    title:'格言Bot',
    description:'格言をGASでスクレイピングして返すLINEBotです。',
    image:GAS,
    link:'https://liff.line.me/1645278921-kWRPP32q?accountId=173rtqnd&openerPlatform=native&openerKey=home%3Arecommend',
    techs:['Google Apps Script','Parserライブラリ','LINE Messaging API']
  },{
    title:'本棚管理アプリ(SPA版)',
    description:'React hooks,SpringBootで作成したSPAです。',
    image:ReactImg,
    link:'https://learn-spa-bookshelf.herokuapp.com/',
    techs:['React hooks','Material-UI','SpringBoot','PostgreSQL','heroku','楽天BooksAPI']
  },{
    title:'本棚管理アプリ',
    description:'SpringBoot,ThymeLeafsで作成したWebアプリです。',
    image:Spring,
    link:'https://suzuki-portfolio.herokuapp.com/',
    techs:['SpringBoot','JPARepository','ThymeLeaf','PostgreSQL','楽天BooksAPI','heroku']
  }];

  const skils = [
    {title:"Java",rate:4},
    {title:"C#",rate:3},
    {title:"HTML",rate:3},
    {title:"CSS",rate:2},
    {title:"JavaScript",rate:3},
    {title:"Google Apps Script",rate:3},
    {title:"Node.js",rate:3},
    {title:"React",rate:4},
    {title:"React Material-UI",rate:3},
    {title:"Spring",rate:3},
    {title:"ASP.net",rate:3},
    {title:"OracleSQL",rate:4},
    {title:"PostgreSQL",rate:2},
    {title:"SQLServer",rate:2},
    {title:"Git",rate:3},
    {title:"SVN",rate:4}
  ]

  const cert = [
    {
      title:"JavaGold SE8",
      image:Gold,
      date:"2020-06"
    },
    {
      title:"JavaSilver SE8",
      image:Silver,
      date:"2020-05"
    }
  ];

  return (
    <React.Fragment>
      <ButtonAppBar />
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center">
              Suzuki's Portfolio
            </Typography>
            <Typography variant="h4" align="center">
              Web Engineer
            </Typography>
          </Container>
        </div>
        <Typography variant="h3" align="left">
            <a name="Profile">PROFILE</a>
        </Typography>
        <div className={classes.profileContent}>
          <Avatar alt="R" src="https://avatars.githubusercontent.com/u/66355316?s=460&u=86ab7866746ceee42478c65e9b475789286be02b&v=4" className={classes.profileImage} /> 
          <div className={classes.profileText}>
            <p>北海道札幌市在住、平成5年生まれのWebエンジニア、Suzukiと申します。<br/>
            以前は営業職に携わっており、業務効率改善のため、簡易的なシステムを作成したことから<br/>
            IT業界に興味を持ち、2020年4月からはIT業界に転職し現在も従事しております。<br/>
            趣味は学習を兼ねた個人開発で、日々技術向上に向け邁進しております。</p>
          </div>
        </div>
        <Typography variant="h3" align="left">
            <a name="Works">WORKS</a>
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              {cards.map((card)=>(
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=>setModalFlg(card.title)}>
                      使用技術
                    </Button>
                    <Button size="small" color="primary">
                      <a href={card.link}>リンク</a>
                    </Button>
                  </CardActions>
                  <div>
                    <Modal
                        aria-labelledby="spring-modal-title"
                        aria-describedby="spring-modal-description"
                        className={classes.modal}
                        open={modalFlg === card.title}
                        onClose={()=>setModalFlg('')}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={modalFlg === card.title}>
                        <div className={classes.paper}>
                            <h2 id="spring-modal-title">{card.title}</h2>
                            <h3>使用技術</h3>
                            {card.techs.map((tech)=>(
                                  <p id="spring-modal-description">・{tech}</p>
                            ))}
                        </div>
                        </Fade>
                    </Modal>
                  </div>
                </Card>
              </Grid>
              ))}
          </Grid>
        </Container>
        <Typography variant="h3" align="left">
            <a name="Skills">SKILLS</a>
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              {skils.map((skil)=>(
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Typography component="legend">{skil.title}</Typography>
                      <Rating value={skil.rate} readOnly />
                    </Box>
                  </CardContent>
                </Card> 
              </Grid>
              ))}
          </Grid>
        </Container>

        <Typography variant="h3" align="left">
          <a name="Certificate">CERTIFICATE</a>
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              {cert.map((cert)=>(
              <Grid item key={1} xs={6} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={cert.image}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {cert.title}
                    </Typography>
                    <Typography>
                      {cert.date}
                    </Typography>
                  </CardContent>
                </Card> 
              </Grid>
              ))}
          </Grid>
        </Container>
      <Typography variant="h3" align="left">
        <a name="Contact">CONTACT</a>
      </Typography>
      <Typography align="center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXbUZ2kS_LGkeZfvKusaRnIvmScwrV9vmx8HPon1bFdDycVA/viewform?embedded=true" width={windowSize} height="800" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </Typography>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}