import { stylex } from '../main';
import logo from '/logo.webp';

function home() {
    const styles = stylex.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '1532px',
            margin: '0 auto',
            backgroundColor: '#e8ecfc',
            height: '100%',
            '@media (max-width: 1280px)': {
                maxWidth: '100%',
            }
        },

        nav: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: 'white',
            padding: '20px',
            position: 'sticky',
            top: '0',
            zIndex: 30,
            '@media (max-width: 1280px)': {
                flexWrap: 'wrap',
                gap: '1rem'
            }
        },

        touchBtn: {
            padding: '10px 20px',
            color: 'white',
            borderRadius: '4px',
            backgroundColor: '#0068d7',
            border: '#0068d7',
            cursor: 'pointer',
            fontWeight: '600',
            transition: '.3s all ease',
            ':hover': {
                backgroundColor: '#1c7cdc',
            },
            '@media (max-width: 425px)': {
                width: '100%',
            }
        },

        heroImg: {
            width: '100%',
            aspectRatio: '16/6',
            position: 'relative',
            zIndex: '1',
            '@media (max-width: 1280px)': {
                aspectRatio: '16/10',
            },
            '@media (max-width: 425px)': {
                aspectRatio: '16/16',
            }
        },

        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },

        darkBg: {
            position: 'absolute',
            width: '1200px',
            height: '200px',
            backgroundColor: '#0000001f',
            top: '50%',
            left: '50%',
            translate: '-50% -50%',
            borderRadius: '14px',
            backdropFilter: 'blur(4px)',
            '@media (max-width: 1280px)': {
                width: '90%',
                height: '100px',
            }
        },

        floatingTabDiv: {
            width: '1200px',
            height: '120px',
            backgroundColor: 'white',
            borderRadius: '14px',
            margin: '0 auto',
            marginTop: '-4.5rem',
            zIndex: '2',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 4rem',
            '@media (max-width: 1280px)': {
                width: '90%',
                flexWrap: 'nowrap',
                overflow: 'auto',
                gap: '1.5rem',
                padding: '0.25rem 2rem',
                height: '96px',
            },
            '@media (max-width: 425px)': {
                fontSize: '14px'
            }

        },

        selectOpt: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            // borderBottom: '3px solid #0068d7',
            // paddingBottom: '0.5rem',
            cursor: 'pointer',
            position: 'relative',
            '::after': {
                content: '',
                position: 'absolute',
                height: '2px',
                width: '100%',
                backgroundColor: '#0068d7',
                bottom: '-6px'
            }
        },


        cursorPointer: {
            cursor: 'pointer',
            ':hover': {
                color: '#000000b0'
            }
        },


        boxShadow: {
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
        },

        flex: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '2rem',
            width: '1200px',
            margin: '0 auto',
            marginTop: '4rem',
            '@media (max-width: 1280px)': {
                width: '90%',
                gridTemplateColumns: 'repeat(2,1fr)',
            },
            '@media (max-width: 425px)': {
                width: '90%',
                gridTemplateColumns: 'repeat(1,1fr)',
            }
        },

        box: {
            // gridColumn: 1,
            width: '100%',
            // aspectRatio: '1/1',
            backgroundColor: 'white',
            borderRadius: '0.5rem'
        },

        textCenter: {
            textAlign: 'center',
            fontSize: '1.2rem',
            padding: '2rem 1rem'
        },

        linearGradient: {
            // gridColumn:1,
            background: 'linear-gradient(45deg, #006BD6, #00CBBD)',
            padding: '1.25rem',
            borderRadius: '0.5rem'
        },

        roundedLg: {
            borderRadius: '0.5rem',
            '@media (max-width: 1280px)': {
                width: '100%',
            }
        },


        whiteBtn: {
            padding: '10px 30px',
            color: 'black',
            borderRadius: '4px',
            backgroundColor: 'white',
            border: 'white',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1.1rem',
            width: 'fit-content',
            margin: '0 auto',
            marginTop: '0.5rem',
            '@media (max-width: 1280px)': {
                fontSize: '14px',
                textAlign:'center'
            },
        },

        finalSec: {
            backgroundColor: 'white',
            width: '1200px',
            margin: '0 auto',
            marginTop: '4rem',
            borderRadius: '0.5rem',
            padding: '2rem ',
            height: '400px',
            marginBottom: '5rem',
            '@media (max-width: 1280px)': {
                width: '90%',
                marginTop: '2rem',
            }
        },

        finHeading: {
            fontSize: '1.5rem',

        },

        finPara: {
            fontSize: '1.25rem',
            fontWeight: 400
        }
    })

    return (
        <section {...stylex.props(styles.container)}>
            <nav {...stylex.props(styles.nav)}>
                <img src={logo} width={170} height={55} alt='logo' decoding='async' draggable="false" />
                <button {...stylex.props(styles.touchBtn)}>Get in Touch</button>
            </nav>

            <div>
                <div {...stylex.props(styles.heroImg)}>
                    <img {...stylex.props(styles.img)} src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Home image" decoding='async' draggable="false" />
                    <div {...stylex.props(styles.darkBg)}></div>
                </div>

                <div {...stylex.props(styles.floatingTabDiv, styles.boxShadow)}>
                    <div {...stylex.props(styles.selectOpt)}>
                        <img width={18} src="./location.svg" alt="location icon" decoding='async' draggable="false" />
                        <h5>Overview</h5>
                    </div>
                    <h5 {...stylex.props(styles.cursorPointer)}>Destination</h5>
                    <h5 {...stylex.props(styles.cursorPointer)}>Accomodation</h5>
                    <h5 {...stylex.props(styles.cursorPointer)}>Map</h5>
                    <h5 {...stylex.props(styles.cursorPointer)}>Transport</h5>
                    <h5 {...stylex.props(styles.cursorPointer)}>Information</h5>
                </div>


                <div {...stylex.props(styles.flex)}>
                    <div {...stylex.props(styles.box, styles.boxShadow)}>
                        <h4 {...stylex.props(styles.textCenter)}>Destination & Accommodation</h4>
                    </div>
                    <div {...stylex.props(styles.linearGradient, styles.boxShadow)}>
                        <img src="./map.png" alt="map image" decoding='async' draggable="false" {...stylex.props(styles.roundedLg)} />
                        <div {...stylex.props(styles.whiteBtn)}>
                            Day By Day Overview
                        </div>
                    </div>
                </div>

                <div {...stylex.props(styles.finalSec, styles.boxShadow)}>
                    <h4 {...stylex.props(styles.finHeading)}>At a glance</h4>
                    <h4 {...stylex.props(styles.finPara)}>5 Days / 4 Nights</h4>
                </div>
            </div>
        </section>
    )
}

export default home;