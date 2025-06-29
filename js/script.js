document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const revealButton = document.getElementById('reveal-button');
    const statusIndicator = document.getElementById('status-indicator');
    const bgVideo = document.getElementById('bg-video'); 
    const backgroundMusic = document.getElementById('background-music'); 

    statusIndicator.style.backgroundColor = '#f04747'; 

    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#9b6dff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#9b6dff'
                    }
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        c: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'bottom',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble'
                    },
                    onclick: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 0.4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true
        });
    }

    if (revealButton) {
        revealButton.addEventListener('click', () => {
            if (backgroundMusic) {
                backgroundMusic.play().catch(error => {
                    console.warn('Erro ao reproduzir áudio automaticamente (pode ser bloqueado pelo navegador):', error);
                });
            }

            if (bgVideo) { 
                bgVideo.play().catch(error => {
                    console.error('Erro ao reproduzir vídeo automaticamente:', error);
                });
            }

            loadingScreen.style.opacity = '0';
            
            setTimeout(() => {
                loadingScreen.style.display = 'none'; 
                mainContent.classList.remove('hidden');
            }, 500); 
        });
    }

    function getStatusColor(status) {
        const colors = {
            online: '#43b581',
            idle: '#faa61a',
            dnd: '#f04747',
            offline: '#747f8d'
        };
        return colors[status] || colors.offline;
    }
});