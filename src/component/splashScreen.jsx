import React, { Component } from 'react';
import logo from '../logo.png';

function SplashMessage() {
    const fadeInKeyframes = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;

    const style = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Adjust as needed
            animation: 'fadeIn 1s ease-in-out',
            // Inject keyframes into the document head
            animationFillMode: 'forwards',
        },
        centeredDiv: {
            textAlign: 'center', // Center text horizontally
            padding: '20px', // Add padding for better visibility
            filter: 'brightness(0) invert(1)',
        },
    };

    // Inject keyframes into the document head
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = fadeInKeyframes;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    return (
        <div style={style.container}>
            <img src={logo} className="App-logo" alt="logo" style={style.centeredDiv} />
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1000);
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return <SplashMessage />;

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}
