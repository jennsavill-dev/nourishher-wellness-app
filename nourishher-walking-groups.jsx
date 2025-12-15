import React, { useState, useEffect } from 'react';

const NourishHerAndrea = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [userPlan, setUserPlan] = useState('free'); // 'free', 'premium', 'vip'
  const [isLiveNow, setIsLiveNow] = useState(true); // Simulate live walk
  const [savedContent, setSavedContent] = useState([]);
  const [registeredWalks, setRegisteredWalks] = useState([]);

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const showScreen = (screenId) => {
    setCurrentScreen(screenId);
  };

  const handleUpgrade = (plan) => {
    setUserPlan(plan);
    showScreen('payment-success');
  };

  const registerForWalk = (walkId) => {
    setRegisteredWalks([...registeredWalks, walkId]);
  };

  const styles = {
    container: {
      width: '100%',
      maxWidth: '400px',
      height: '750px',
      background: 'white',
      borderRadius: '30px',
      boxShadow: '0 25px 70px rgba(0,0,0,0.15)',
      overflow: 'hidden',
      margin: '0 auto',
      position: 'relative',
      fontFamily: '"Playfair Display", Georgia, serif'
    },
    screen: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      animation: 'fadeIn 0.4s ease'
    },
    header: {
      padding: '45px 20px 15px',
      background: 'linear-gradient(135deg, #F5E6D8 0%, #E8D5C4 100%)',
      borderBottom: '1px solid rgba(139, 90, 43, 0.1)'
    },
    content: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      background: '#FDFBF8'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #8B5A2B 0%, #A0826D 100%)',
      border: 'none',
      borderRadius: '25px',
      padding: '16px 32px',
      fontSize: '16px',
      fontWeight: '600',
      color: 'white',
      cursor: 'pointer',
      width: '100%',
      marginTop: '12px',
      boxShadow: '0 4px 15px rgba(139, 90, 43, 0.2)',
      transition: 'transform 0.2s',
      letterSpacing: '0.5px'
    },
    secondaryButton: {
      background: 'white',
      border: '2px solid #8B5A2B',
      borderRadius: '25px',
      padding: '16px 32px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#8B5A2B',
      cursor: 'pointer',
      width: '100%',
      marginTop: '12px',
      transition: 'all 0.2s'
    },
    card: {
      background: 'white',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      border: '1px solid rgba(139, 90, 43, 0.05)'
    },
    liveCard: {
      background: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 100%)',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '16px',
      border: '2px solid #FF6B6B',
      position: 'relative',
      overflow: 'hidden'
    },
    liveBadge: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      background: '#FF4444',
      color: 'white',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: '700',
      animation: 'pulse 2s ease-in-out infinite',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    premiumBadge: {
      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
      color: '#8B5A2B',
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: '700',
      display: 'inline-block',
      marginLeft: '8px',
      letterSpacing: '0.5px'
    },
    walkCard: {
      background: 'linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 100%)',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '16px',
      border: '1px solid #81C784'
    }
  };

  const renderScreen = () => {
    switch(currentScreen) {
      case 'splash':
        return (
          <div style={{
            ...styles.screen, 
            background: 'linear-gradient(135deg, #8B5A2B 0%, #D4A574 100%)',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '70px', marginBottom: '20px'}}>🌿</div>
              <div style={{fontSize: '42px', fontWeight: '300', marginBottom: '10px'}}>NourishHer</div>
              <div style={{fontSize: '18px', fontWeight: '300', opacity: 0.9}}>with Andrea Slacksmith</div>
              <div style={{fontSize: '14px', marginTop: '20px', opacity: 0.8}}>Holistic Wellness for Every Woman</div>
            </div>
          </div>
        );

      case 'home':
        return (
          <div style={styles.screen}>
            <div style={styles.header}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <span style={{fontSize: '22px', cursor: 'pointer'}} onClick={() => showScreen('menu')}>☰</span>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7}}>Welcome back</div>
                  <div style={{fontSize: '20px', fontWeight: '600', color: '#8B5A2B'}}>Beautiful Soul</div>
                </div>
                <span style={{fontSize: '22px', cursor: 'pointer'}} onClick={() => showScreen('profile')}>👤</span>
              </div>
            </div>

            <div style={styles.content}>
              {/* LIVE WALK NOW */}
              {isLiveNow && (
                <div style={styles.liveCard} onClick={() => showScreen('live-walk')}>
                  <div style={styles.liveBadge}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: 'white',
                      borderRadius: '50%',
                      animation: 'blink 1s infinite'
                    }}></span>
                    LIVE NOW
                  </div>
                  <h3 style={{fontSize: '20px', marginBottom: '10px', color: '#8B5A2B', paddingRight: '80px'}}>
                    Morning Wellness Walk
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', marginBottom: '12px'}}>
                    Join Andrea & Dr. Sarah Chen discussing "Hormones & Movement"
                  </p>
                  <div style={{display: 'flex', gap: '15px', fontSize: '13px', color: '#8B5A2B'}}>
                    <span>📍 Botanical Gardens</span>
                    <span>👥 47 watching</span>
                    <span>⏱ Started 5 min ago</span>
                  </div>
                  <button style={{
                    ...styles.primaryButton,
                    marginTop: '15px',
                    background: '#FF4444'
                  }}>
                    Join Live Stream →
                  </button>
                </div>
              )}

              {/* UPCOMING WALKS */}
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                <h3 style={{fontSize: '20px', color: '#8B5A2B'}}>Wellness Walks</h3>
                <span style={{fontSize: '13px', color: '#8B5A2B', cursor: 'pointer'}} 
                      onClick={() => showScreen('walks')}>View All →</span>
              </div>

              <div style={styles.walkCard}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                  <h4 style={{fontSize: '16px', color: '#2E7D32'}}>Saturday Sunrise Walk</h4>
                  <span style={{fontSize: '12px', background: '#C8E6C9', padding: '3px 10px', borderRadius: '10px'}}>FREE</span>
                </div>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '8px'}}>
                  Guest: Michelle Roberts - Nutritionist
                </p>
                <p style={{fontSize: '12px', color: '#999', marginBottom: '10px'}}>
                  Topic: "Eating for Energy & Vitality"
                </p>
                <div style={{display: 'flex', gap: '15px', fontSize: '12px', color: '#666'}}>
                  <span>📅 Dec 21, 6:30 AM</span>
                  <span>⏱ 45 min</span>
                  <span>👥 23 registered</span>
                </div>
              </div>

              {/* DAILY CHECK-IN */}
              <div style={{...styles.card, background: 'linear-gradient(135deg, #F5E6D8 0%, #E8D5C4 100%)'}}>
                <h3 style={{fontSize: '18px', marginBottom: '12px', color: '#8B5A2B'}}>Daily Check-In</h3>
                <p style={{fontSize: '14px', marginBottom: '15px', color: '#6B4E3D'}}>
                  How is your energy today, beautiful?
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                  <button style={{
                    padding: '15px',
                    borderRadius: '15px',
                    border: 'none',
                    background: 'white',
                    cursor: 'pointer'
                  }} onClick={() => showScreen('mood-response')}>
                    <div style={{fontSize: '28px'}}>✨</div>
                    <div style={{fontSize: '12px', marginTop: '5px'}}>Vibrant</div>
                  </button>
                  <button style={{
                    padding: '15px',
                    borderRadius: '15px',
                    border: 'none',
                    background: 'white',
                    cursor: 'pointer'
                  }} onClick={() => showScreen('mood-response')}>
                    <div style={{fontSize: '28px'}}>🌸</div>
                    <div style={{fontSize: '12px', marginTop: '5px'}}>Balanced</div>
                  </button>
                  <button style={{
                    padding: '15px',
                    borderRadius: '15px',
                    border: 'none',
                    background: 'white',
                    cursor: 'pointer'
                  }} onClick={() => showScreen('mood-response')}>
                    <div style={{fontSize: '28px'}}>🌙</div>
                    <div style={{fontSize: '12px', marginTop: '5px'}}>Need TLC</div>
                  </button>
                </div>
              </div>

              {/* TODAY'S CONTENT */}
              <h3 style={{fontSize: '20px', marginBottom: '15px', color: '#8B5A2B'}}>Today's Wellness</h3>
              
              <div style={styles.card} onClick={() => showScreen('meditation')}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div>
                    <h4 style={{fontSize: '16px', marginBottom: '5px'}}>Morning Meditation</h4>
                    <p style={{fontSize: '13px', color: '#999'}}>5-min grounding practice</p>
                  </div>
                  <div style={{fontSize: '24px'}}>🧘‍♀️</div>
                </div>
              </div>

              <div style={styles.card} onClick={() => userPlan !== 'free' ? showScreen('yoga') : showScreen('pricing')}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div>
                    <h4 style={{fontSize: '16px', marginBottom: '5px'}}>
                      Goddess Flow Yoga
                      {userPlan === 'free' && <span style={styles.premiumBadge}>PREMIUM</span>}
                    </h4>
                    <p style={{fontSize: '13px', color: '#999'}}>20-min feminine energy flow</p>
                  </div>
                  <div style={{fontSize: '24px'}}>{userPlan === 'free' ? '🔒' : '🌺'}</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'live-walk':
        return (
          <div style={{...styles.screen, background: '#000'}}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              zIndex: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}>
              <span style={{
                fontSize: '24px',
                color: 'white',
                cursor: 'pointer',
                background: 'rgba(0,0,0,0.5)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} onClick={() => showScreen('home')}>✕</span>
              
              <div style={{
                background: '#FF4444',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: 'white',
                  borderRadius: '50%',
                  animation: 'blink 1s infinite'
                }}></span>
                LIVE
              </div>
            </div>

            {/* Video Area */}
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'linear-gradient(135deg, #2E7D32, #66BB6A)'
            }}>
              <div style={{textAlign: 'center', color: 'white', padding: '20px'}}>
                <div style={{fontSize: '60px', marginBottom: '20px'}}>🚶‍♀️🌳</div>
                <h3 style={{fontSize: '24px', marginBottom: '10px'}}>Live from Botanical Gardens</h3>
                <p style={{fontSize: '16px', opacity: 0.9, marginBottom: '20px'}}>
                  Andrea & Dr. Sarah Chen
                </p>
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '15px',
                  borderRadius: '15px',
                  marginBottom: '20px'
                }}>
                  <p style={{fontSize: '14px', marginBottom: '5px'}}>Today's Topic:</p>
                  <p style={{fontSize: '18px', fontWeight: '600'}}>"How Movement Balances Your Hormones"</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '14px'}}>
                  <span>👥 52 watching</span>
                  <span>⏱ 12:34</span>
                  <span>💬 28 comments</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div style={{
              background: 'rgba(0,0,0,0.8)',
              padding: '20px',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '15px'
              }}>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}>💬</button>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}>❤️</button>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}>📱</button>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}>🔊</button>
              </div>
              
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '25px',
                padding: '12px 20px',
                color: 'white',
                fontSize: '14px',
                textAlign: 'center'
              }}>
                💬 Type a message...
              </div>
            </div>
          </div>
        );

      case 'walks':
        return (
          <div style={styles.screen}>
            <div style={styles.header}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: '20px', cursor: 'pointer', marginRight: '15px'}} 
                      onClick={() => showScreen('home')}>←</span>
                <h2 style={{fontSize: '22px', color: '#8B5A2B'}}>Wellness Walking Groups</h2>
              </div>
            </div>

            <div style={styles.content}>
              <div style={{
                background: 'linear-gradient(135deg, #C8E6C9, #E8F5E9)',
                borderRadius: '20px',
                padding: '20px',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{fontSize: '18px', marginBottom: '10px', color: '#2E7D32'}}>
                  🌿 Join Our Walking Community
                </h3>
                <p style={{fontSize: '14px', color: '#666', marginBottom: '15px'}}>
                  Free weekly walks with expert speakers discussing wellness topics in nature
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', fontSize: '13px'}}>
                  <div style={{background: 'white', padding: '10px', borderRadius: '10px'}}>
                    <strong>156</strong><br/>Members
                  </div>
                  <div style={{background: 'white', padding: '10px', borderRadius: '10px'}}>
                    <strong>52</strong><br/>Walks Hosted
                  </div>
                  <div style={{background: 'white', padding: '10px', borderRadius: '10px'}}>
                    <strong>4.9★</strong><br/>Rating
                  </div>
                </div>
              </div>

              <h3 style={{fontSize: '18px', marginBottom: '15px', color: '#8B5A2B'}}>This Week's Schedule</h3>

              {/* Monday Walk */}
              <div style={styles.walkCard}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                  <h4 style={{fontSize: '16px', color: '#2E7D32'}}>Monday Morning Reset</h4>
                  <span style={{fontSize: '12px', background: '#FFECB3', padding: '3px 10px', borderRadius: '10px'}}>PAST</span>
                </div>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '8px'}}>
                  Guest: Lisa Thompson - Mindfulness Coach
                </p>
                <p style={{fontSize: '12px', color: '#999', marginBottom: '10px'}}>
                  Topic: "Walking Meditation Techniques"
                </p>
                <div style={{display: 'flex', gap: '15px', fontSize: '12px', color: '#666'}}>
                  <span>📅 Dec 18, 7:00 AM</span>
                  <span>👥 31 attended</span>
                </div>
                <button style={{...styles.secondaryButton, marginTop: '10px'}} 
                        onClick={() => showScreen('walk-replay')}>
                  Watch Replay
                </button>
              </div>

              {/* Wednesday Walk */}
              <div style={{...styles.liveCard, animation: 'none', border: '2px solid #4CAF50'}}>
                <div style={{...styles.liveBadge, background: '#4CAF50', animation: 'none'}}>
                  TODAY
                </div>
                <h4 style={{fontSize: '16px', color: '#2E7D32', marginBottom: '8px'}}>Midweek Wellness Walk</h4>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '8px'}}>
                  Guest: Dr. Sarah Chen - Hormone Specialist
                </p>
                <p style={{fontSize: '12px', color: '#999', marginBottom: '10px'}}>
                  Topic: "Hormones & Movement Connection"
                </p>
                <div style={{display: 'flex', gap: '15px', fontSize: '12px', color: '#666', marginBottom: '10px'}}>
                  <span>📅 Today, 6:00 PM</span>
                  <span>⏱ 45 min</span>
                  <span>👥 28 registered</span>
                </div>
                {registeredWalks.includes('wednesday') ? (
                  <button style={{...styles.primaryButton, background: '#4CAF50'}}>
                    ✓ You're Registered - See you there!
                  </button>
                ) : (
                  <button style={styles.primaryButton} 
                          onClick={() => registerForWalk('wednesday')}>
                    Register for Free
                  </button>
                )}
              </div>

              {/* Saturday Walk */}
              <div style={styles.walkCard}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                  <h4 style={{fontSize: '16px', color: '#2E7D32'}}>Saturday Sunrise Special</h4>
                  <span style={{fontSize: '12px', background: '#C8E6C9', padding: '3px 10px', borderRadius: '10px'}}>FREE</span>
                </div>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '8px'}}>
                  Guest: Michelle Roberts - Clinical Nutritionist
                </p>
                <p style={{fontSize: '12px', color: '#999', marginBottom: '10px'}}>
                  Topic: "Eating for Energy & Gut Health"
                </p>
                <div style={{display: 'flex', gap: '15px', fontSize: '12px', color: '#666', marginBottom: '10px'}}>
                  <span>📅 Dec 21, 6:30 AM</span>
                  <span>⏱ 60 min</span>
                  <span>📍 Lakeside Trail</span>
                </div>
                {registeredWalks.includes('saturday') ? (
                  <button style={{...styles.primaryButton, background: '#4CAF50'}}>
                    ✓ Registered
                  </button>
                ) : (
                  <button style={styles.primaryButton} 
                          onClick={() => registerForWalk('saturday')}>
                    Register for Free
                  </button>
                )}
              </div>

              <div style={{
                background: '#FFF3E0',
                borderRadius: '15px',
                padding: '15px',
                marginTop: '20px'
              }}>
                <h4 style={{fontSize: '14px', marginBottom: '8px', color: '#8B5A2B'}}>
                  📱 Can't Join In Person?
                </h4>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '10px'}}>
                  All walks are streamed live on Facebook! Join from anywhere and walk along with us.
                </p>
                <button style={styles.secondaryButton}>
                  Follow on Facebook
                </button>
              </div>

              {/* Premium Walking Programs */}
              <div style={{marginTop: '30px'}}>
                <h3 style={{fontSize: '18px', marginBottom: '15px', color: '#8B5A2B'}}>
                  Premium Walking Programs
                  <span style={styles.premiumBadge}>PREMIUM</span>
                </h3>
                
                <div style={{...styles.card, border: '2px solid #FFD700'}}>
                  <h4 style={{fontSize: '16px', marginBottom: '8px'}}>28-Day Walking Transformation</h4>
                  <p style={{fontSize: '13px', color: '#666', marginBottom: '10px'}}>
                    Structured program with daily walking goals, meditation practices, and nutrition guidance
                  </p>
                  <div style={{display: 'flex', gap: '10px', fontSize: '12px', marginBottom: '10px'}}>
                    <span style={{background: '#FFF3E0', padding: '3px 8px', borderRadius: '8px'}}>4 weeks</span>
                    <span style={{background: '#FFF3E0', padding: '3px 8px', borderRadius: '8px'}}>Daily support</span>
                    <span style={{background: '#FFF3E0', padding: '3px 8px', borderRadius: '8px'}}>Meal plans</span>
                  </div>
                  <button style={userPlan === 'free' ? styles.secondaryButton : styles.primaryButton}
                          onClick={() => userPlan === 'free' ? showScreen('pricing') : null}>
                    {userPlan === 'free' ? '🔒 Upgrade to Access' : 'Start Program'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'walk-replay':
        return (
          <div style={styles.screen}>
            <div style={{
              background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
              padding: '45px 20px 20px',
              color: 'white',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '45px',
                left: '20px',
                fontSize: '20px',
                cursor: 'pointer'
              }} onClick={() => showScreen('walks')}>←</span>
              
              <h2 style={{fontSize: '24px', textAlign: 'center', marginBottom: '10px'}}>Walk Replay</h2>
              <p style={{fontSize: '14px', textAlign: 'center', opacity: 0.9}}>
                Monday Morning Reset - Dec 18
              </p>
            </div>

            <div style={styles.content}>
              <div style={{
                background: '#E8F5E9',
                borderRadius: '20px',
                padding: '60px 20px',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                <div style={{fontSize: '60px', marginBottom: '20px'}}>🎥</div>
                <p style={{fontSize: '16px', color: '#2E7D32', marginBottom: '20px'}}>
                  Walking Meditation with Lisa Thompson
                </p>
                <div style={{display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '24px'}}>
                  <span style={{cursor: 'pointer'}}>⏮</span>
                  <span style={{cursor: 'pointer', fontSize: '32px'}}>▶️</span>
                  <span style={{cursor: 'pointer'}}>⏭</span>
                </div>
                <div style={{marginTop: '20px', fontSize: '13px', color: '#666'}}>
                  Duration: 42:18
                </div>
              </div>

              <div style={styles.card}>
                <h4 style={{fontSize: '16px', marginBottom: '10px', color: '#8B5A2B'}}>Key Takeaways</h4>
                <ul style={{fontSize: '13px', lineHeight: '1.8', paddingLeft: '20px', color: '#666'}}>
                  <li>Focus on breath rhythm matching your steps</li>
                  <li>Use nature sounds as meditation anchors</li>
                  <li>Practice gratitude with each footfall</li>
                  <li>End with 2-minute standing meditation</li>
                </ul>
              </div>

              <div style={styles.card}>
                <h4 style={{fontSize: '16px', marginBottom: '10px', color: '#8B5A2B'}}>About Lisa Thompson</h4>
                <p style={{fontSize: '13px', color: '#666', lineHeight: '1.6'}}>
                  Certified Mindfulness Coach with 10+ years experience. Specializes in movement-based 
                  meditation and stress reduction techniques for busy women.
                </p>
              </div>

              <button style={styles.primaryButton}>
                Download Audio for Offline Walking
              </button>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div style={styles.screen}>
            <div style={{
              padding: '45px 20px 20px',
              background: 'linear-gradient(135deg, #8B5A2B 0%, #D4A574 100%)',
              color: 'white',
              textAlign: 'center'
            }}>
              <h2 style={{fontSize: '28px', marginBottom: '10px'}}>Choose Your Journey</h2>
              <p style={{fontSize: '14px', opacity: 0.9}}>Invest in your wellness transformation</p>
            </div>

            <div style={styles.content}>
              <div style={{...styles.card, border: '2px solid #E8D5C4'}}>
                <div style={{textAlign: 'center', marginBottom: '15px'}}>
                  <div style={{fontSize: '20px', fontWeight: '600', color: '#8B5A2B'}}>Essential</div>
                  <div style={{fontSize: '32px', fontWeight: '700', margin: '10px 0'}}>Free</div>
                </div>
                <ul style={{fontSize: '14px', lineHeight: '2', marginBottom: '15px', paddingLeft: '20px'}}>
                  <li>✅ All walking groups (live & replay)</li>
                  <li>✅ Daily check-ins</li>
                  <li>✅ Basic meditations</li>
                  <li>✅ Community forum</li>
                  <li>✅ 3 recipes per month</li>
                </ul>
                <button style={styles.secondaryButton}>Current Plan</button>
              </div>

              <div style={{...styles.card, border: '2px solid #FFD700', position: 'relative'}}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  padding: '4px 15px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#8B5A2B'
                }}>
                  MOST POPULAR
                </div>
                <div style={{textAlign: 'center', marginBottom: '15px'}}>
                  <div style={{fontSize: '20px', fontWeight: '600', color: '#8B5A2B'}}>Premium Goddess</div>
                  <div style={{fontSize: '32px', fontWeight: '700', margin: '10px 0'}}>
                    $29<span style={{fontSize: '16px', fontWeight: '400'}}>/month</span>
                  </div>
                </div>
                <ul style={{fontSize: '14px', lineHeight: '2', marginBottom: '15px', paddingLeft: '20px'}}>
                  <li>Everything in Essential +</li>
                  <li>✨ Structured walking programs</li>
                  <li>✨ Full yoga & movement library</li>
                  <li>✨ 30+ guided meditations</li>
                  <li>✨ Monthly workshops</li>
                  <li>✨ Meal plans & shopping lists</li>
                </ul>
                <button style={styles.primaryButton} onClick={() => handleUpgrade('premium')}>
                  Start 7-Day Free Trial
                </button>
              </div>

              <div style={{...styles.card, background: 'linear-gradient(135deg, #FFF9F0, #F5E6D8)'}}>
                <div style={{textAlign: 'center', marginBottom: '15px'}}>
                  <div style={{fontSize: '20px', fontWeight: '600', color: '#8B5A2B'}}>VIP Inner Circle</div>
                  <div style={{fontSize: '32px', fontWeight: '700', margin: '10px 0'}}>
                    $97<span style={{fontSize: '16px', fontWeight: '400'}}>/month</span>
                  </div>
                </div>
                <ul style={{fontSize: '14px', lineHeight: '2', marginBottom: '15px', paddingLeft: '20px'}}>
                  <li>Everything in Premium +</li>
                  <li>💎 Private walking group sessions</li>
                  <li>💎 Weekly 1:1 coaching</li>
                  <li>💎 Personalized wellness plan</li>
                  <li>💎 Priority speaker requests</li>
                </ul>
                <button style={styles.primaryButton} onClick={() => handleUpgrade('vip')}>
                  Apply for VIP
                </button>
              </div>
            </div>
          </div>
        );

      case 'mood-response':
        return (
          <div style={styles.screen}>
            <div style={styles.header}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: '20px', cursor: 'pointer', marginRight: '15px'}} 
                      onClick={() => showScreen('home')}>←</span>
                <h2 style={{fontSize: '22px', color: '#8B5A2B'}}>Your Wellness Path</h2>
              </div>
            </div>

            <div style={styles.content}>
              <div style={{...styles.card, background: 'linear-gradient(135deg, #F5E6D8, #E8D5C4)', textAlign: 'center'}}>
                <div style={{fontSize: '50px', marginBottom: '15px'}}>🌟</div>
                <h3 style={{fontSize: '20px', marginBottom: '10px', color: '#8B5A2B'}}>Beautiful, you're glowing!</h3>
                <p style={{fontSize: '14px', color: '#6B4E3D', lineHeight: '1.6'}}>
                  Your energy is radiant today. Let's channel this vibrance into movement and connection.
                </p>
              </div>

              <h3 style={{fontSize: '18px', marginBottom: '15px', color: '#8B5A2B'}}>Perfect for Your Energy</h3>

              <div style={styles.walkCard} onClick={() => showScreen('walks')}>
                <h4 style={{fontSize: '16px', marginBottom: '8px'}}>Join Today's Walk</h4>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '10px'}}>
                  Connect with our community while moving your beautiful body in nature
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={{fontSize: '12px', color: '#2E7D32'}}>6:00 PM Today</span>
                  <span style={{fontSize: '12px', background: '#C8E6C9', padding: '3px 10px', borderRadius: '10px'}}>FREE</span>
                </div>
              </div>

              <div style={styles.card} onClick={() => showScreen('meditation')}>
                <h4 style={{fontSize: '16px', marginBottom: '8px'}}>Gratitude Walking Meditation</h4>
                <p style={{fontSize: '13px', color: '#666', marginBottom: '10px'}}>
                  Amplify your beautiful energy with mindful movement
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={{fontSize: '12px', color: '#8B5A2B'}}>15 minutes</span>
                  <span>🎧</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'payment-success':
        return (
          <div style={{...styles.screen, justifyContent: 'center', alignItems: 'center', padding: '40px'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '60px', marginBottom: '20px'}}>✨</div>
              <h2 style={{fontSize: '28px', marginBottom: '15px', color: '#8B5A2B'}}>Welcome to Your Journey!</h2>
              <p style={{fontSize: '16px', marginBottom: '30px', lineHeight: '1.6', color: '#666'}}>
                You've unlocked your {userPlan === 'premium' ? 'Premium Goddess' : 'VIP Inner Circle'} access.
                Your transformation begins now!
              </p>
              <button style={styles.primaryButton} onClick={() => showScreen('home')}>
                Explore Your New Content
              </button>
            </div>
          </div>
        );

      case 'menu':
        return (
          <div style={styles.screen}>
            <div style={styles.header}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: '20px', cursor: 'pointer', marginRight: '15px'}} 
                      onClick={() => showScreen('home')}>✕</span>
                <h2 style={{fontSize: '22px', color: '#8B5A2B'}}>Menu</h2>
              </div>
            </div>

            <div style={styles.content}>
              <div style={styles.card}>
                <div style={{fontSize: '14px', lineHeight: '2.5'}}>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}
                       onClick={() => showScreen('home')}>
                    🏠 Home
                  </div>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}
                       onClick={() => showScreen('walks')}>
                    🚶‍♀️ Walking Groups
                    <span style={{
                      background: '#FF4444',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '11px',
                      marginLeft: '10px'
                    }}>LIVE</span>
                  </div>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}>
                    📚 Programs & Courses
                    {userPlan === 'free' && <span style={{opacity: 0.5, marginLeft: '8px'}}>🔒</span>}
                  </div>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}>
                    👥 Community Circle
                  </div>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}>
                    📅 Live Sessions Calendar
                  </div>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}>
                    🌿 Herbal Wisdom
                  </div>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}>
                    📖 Blog & Resources
                  </div>
                  <div style={{borderBottom: '1px solid #F5E6D8', paddingBottom: '10px', marginBottom: '10px', cursor: 'pointer'}}
                       onClick={() => showScreen('profile')}>
                    ⚙️ Settings
                  </div>
                  <div style={{cursor: 'pointer'}}>
                    📘 Follow on Facebook
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div style={styles.screen}>
            <div style={styles.header}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <span style={{fontSize: '20px', cursor: 'pointer', marginRight: '15px'}} 
                      onClick={() => showScreen('home')}>←</span>
                <h2 style={{fontSize: '22px', color: '#8B5A2B'}}>Your Wellness Profile</h2>
              </div>
            </div>

            <div style={styles.content}>
              <div style={{textAlign: 'center', marginBottom: '30px'}}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8B5A2B, #D4A574)',
                  margin: '0 auto 15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  color: 'white'
                }}>
                  JW
                </div>
                <h3 style={{fontSize: '20px', marginBottom: '5px'}}>Jen's Wellness Journey</h3>
                <p style={{fontSize: '14px', color: '#999'}}>
                  Member since November 2024
                </p>
                <div style={{marginTop: '10px'}}>
                  {userPlan === 'free' && <span style={{...styles.secondaryButton, padding: '6px 15px', display: 'inline-block', width: 'auto'}}>Free Plan</span>}
                  {userPlan === 'premium' && <span style={styles.premiumBadge}>PREMIUM GODDESS</span>}
                </div>
              </div>

              <div style={styles.card}>
                <h4 style={{fontSize: '16px', marginBottom: '15px', color: '#8B5A2B'}}>Walking Stats</h4>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px'}}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '24px', fontWeight: '700', color: '#2E7D32'}}>14</div>
                    <div style={{fontSize: '12px', color: '#999'}}>Walks Joined</div>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '24px', fontWeight: '700', color: '#2E7D32'}}>42km</div>
                    <div style={{fontSize: '12px', color: '#999'}}>Total Distance</div>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '24px', fontWeight: '700', color: '#2E7D32'}}>8</div>
                    <div style={{fontSize: '12px', color: '#999'}}>Guest Speakers Met</div>
                  </div>
                  <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '24px', fontWeight: '700', color: '#2E7D32'}}>21</div>
                    <div style={{fontSize: '12px', color: '#999'}}>Day Streak</div>
                  </div>
                </div>
              </div>

              <div style={styles.card}>
                <h4 style={{fontSize: '16px', marginBottom: '15px', color: '#8B5A2B'}}>Upcoming Walks</h4>
                <div style={{fontSize: '13px', lineHeight: '2'}}>
                  {registeredWalks.includes('wednesday') && (
                    <div style={{padding: '8px', background: '#E8F5E9', borderRadius: '10px', marginBottom: '8px'}}>
                      ✅ Today 6:00 PM - Midweek Wellness Walk
                    </div>
                  )}
                  {registeredWalks.includes('saturday') && (
                    <div style={{padding: '8px', background: '#E8F5E9', borderRadius: '10px'}}>
                      ✅ Sat 6:30 AM - Saturday Sunrise Special
                    </div>
                  )}
                  {registeredWalks.length === 0 && (
                    <p style={{color: '#999', textAlign: 'center', padding: '20px'}}>
                      No walks registered yet
                    </p>
                  )}
                </div>
              </div>

              {userPlan !== 'vip' && (
                <button style={styles.primaryButton} onClick={() => showScreen('pricing')}>
                  {userPlan === 'free' ? 'Upgrade to Premium' : 'Upgrade to VIP'}
                </button>
              )}
            </div>
          </div>
        );

      case 'meditation':
        return (
          <div style={{...styles.screen, background: 'linear-gradient(135deg, #8B5A2B 0%, #D4A574 100%)'}}>
            <div style={{
              padding: '45px 20px',
              color: 'white',
              textAlign: 'center'
            }}>
              <span style={{fontSize: '20px', position: 'absolute', top: '45px', left: '20px', cursor: 'pointer'}}
                    onClick={() => showScreen('home')}>✕</span>
              <h2 style={{fontSize: '24px', marginBottom: '30px'}}>Walking Meditation</h2>
              
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                margin: '0 auto 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '50px', marginBottom: '10px'}}>🚶‍♀️</div>
                  <div style={{fontSize: '18px'}}>Step & Breathe</div>
                </div>
              </div>

              <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '30px', opacity: 0.95}}>
                "With each step, feel the earth supporting you. 
                You are grounded, present, and perfectly where you need to be."
              </p>

              <div style={{fontSize: '14px', marginBottom: '30px'}}>
                <div>⏱ 3:15 / 10:00</div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '3px',
                  marginTop: '10px'
                }}>
                  <div style={{
                    width: '32%',
                    height: '100%',
                    background: 'white',
                    borderRadius: '3px'
                  }}></div>
                </div>
              </div>

              <div style={{display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '24px'}}>
                <span style={{cursor: 'pointer'}}>⏮</span>
                <span style={{cursor: 'pointer', fontSize: '32px'}}>⏸</span>
                <span style={{cursor: 'pointer'}}>⏭</span>
              </div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '20px',
              right: '20px'
            }}>
              <button style={{
                ...styles.primaryButton,
                background: 'white',
                color: '#8B5A2B'
              }} onClick={() => showScreen('home')}>
                Complete Session
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #FFF9F0 0%, #F5E6D8 100%)',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      <div style={{
        background: 'white',
        padding: '15px 25px',
        borderRadius: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div style={{fontSize: '16px', fontWeight: '600', color: '#8B5A2B', marginBottom: '5px'}}>
          🌿 NourishHer Wellness Demo
        </div>
        <div style={{fontSize: '13px', color: '#999'}}>
          Join our walking community • Learn from experts • Transform together
        </div>
      </div>
      
      <div style={styles.container}>
        {renderScreen()}
      </div>
      
      <div style={{marginTop: '20px', textAlign: 'center', maxWidth: '400px'}}>
        <p style={{fontSize: '13px', color: '#8B5A2B', marginBottom: '10px'}}>
          🚶‍♀️ Free walking groups with live streaming • 🎯 Expert speakers • 💎 Premium programs
        </p>
        <div style={{fontSize: '12px', color: '#999'}}>
          © 2024 Andrea Slacksmith Wellness | Regional Australia
        </div>
      </div>
    </div>
  );
};

export default NourishHerAndrea;
