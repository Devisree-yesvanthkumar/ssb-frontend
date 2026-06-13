const PHOTOS = {
  sugarcane:
    'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&auto=format&fit=crop',
  fruit:
    'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop',
  milkshake:
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop',
  soda:
    'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?w=600&auto=format&fit=crop',
  icecream1:
    'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&auto=format&fit=crop',
  icecream2:
    'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&auto=format&fit=crop',
}

function MenuItem({ name, price }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '9px 0', 
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      gap: 8,
      flexWrap: 'nowrap'
    }}>
      <span style={{ 
        fontSize: 13, 
        color: 'rgba(255,255,255,0.85)', 
        fontFamily: 'Inter, sans-serif',
        flex: 1,
        paddingRight: 8
      }}>{name}</span>
      <span style={{ 
        fontFamily: 'Poppins, sans-serif', 
        fontSize: 13, 
        fontWeight: 700, 
        color: '#FF6B35', 
        background: 'rgba(255,107,53,0.12)', 
        padding: '3px 10px', 
        borderRadius: 50,
        whiteSpace: 'nowrap',
        flexShrink: 0
      }}>₹{price}</span>
    </div>
  )
}
function JuiceCard({ children, featured, delay }) {
  return (
    <div
      className="reveal"
      style={{
        transitionDelay: delay,
        background: 'rgba(255,255,255,0.07)',
        border: featured
          ? '1px solid rgba(255,215,0,0.4)'
          : '1px solid rgba(56,239,125,0.2)',
        borderRadius: 24,
        padding: 'clamp(16px, 4vw, 28px)'
      }}
    >
      {children}
    </div>
  )
}

const freshnessItems = [
  '🌱 100% FRESH INGREDIENTS',
  '🚫 NO PRESERVATIVES',
  '🍃 MADE TO ORDER',
  '✅ FRESH DAILY',
  '🚫 NO ARTIFICIAL SUGAR',
  '🥤 JUICE • LASSI • SHAKE • ICE CREAM',
]

export default function Juice() {
  const doubled = [...freshnessItems, ...freshnessItems]

  return (
    <>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: 60,
          marginBottom: -2,
          background:
            'linear-gradient(135deg,#1a1a2e 0%,#2d1b69 60%,#1a1a2e 100%)',
        }}
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z"
          fill="#0a2e14"
        />
      </svg>

      <section
        id="juice"
        style={{
          background:
            'linear-gradient(135deg,#0a2e14 0%,#0d4020 50%,#1a5c30 100%)',
          paddingBottom: 0,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '70px 24px 0',
          }}
        >
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div
              style={{
                fontFamily: 'Poppins,sans-serif',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#6FFFA8',
                marginBottom: 12,
              }}
            >
              Fresh Juice & Beverages
            </div>

            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(28px,4vw,44px)',
                fontWeight: 900,
                color: '#fff',
                marginBottom: 14,
              }}
            >
              Fresh. Natural. Made to Order.
            </h2>

            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                fontSize: '18px',
                color: 'rgba(56,239,125,0.82)',
              }}
            >
              "While your xerox runs, let your taste buds begin."
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(280px,1fr))',
              gap: 24,
            }}
          >
            {/* Lassi */}
            <JuiceCard featured delay="0.1s">
              <img
                src={PHOTOS.fruit}
                alt=""
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 16,
                  marginBottom: 20,
                }}
              />

              <h3 style={{ color: '#fff', marginBottom: 14 }}>
                🥭 Lassi Specials
              </h3>

              <MenuItem name="Blue Berry Lassi" price="70" />
              <MenuItem name="Chocolate Lassi" price="60" />
              <MenuItem name="Butter Scotch Lassi" price="50" />
              <MenuItem name="Black Current Lassi" price="60" />
              <MenuItem name="Pineapple Lassi" price="50" />
              <MenuItem name="Strawberry Lassi" price="50" />
              <MenuItem name="Mango Lassi" price="50" />
              <MenuItem name="Sweet Lassi" price="40" />
            </JuiceCard>

            {/* Sugarcane */}
            <JuiceCard featured delay="0.2s">
              <img
                src={PHOTOS.sugarcane}
                alt=""
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 16,
                  marginBottom: 20,
                }}
              />

              <h3 style={{ color: '#fff', marginBottom: 14 }}>
                🌿 Sugarcane
              </h3>

              <MenuItem name="Lemon Sugarcane" price="25" />
              <MenuItem name="Ginger Sugarcane" price="25" />
              <MenuItem name="Jeera Sugarcane" price="25" />
              <MenuItem name="Mint Sugarcane" price="25" />
              <MenuItem name="Pepper Sugarcane" price="25" />
            </JuiceCard>

            {/* Fruit Juice */}
            <JuiceCard delay="0.3s">
              <img
                src={PHOTOS.fruit}
                alt=""
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 16,
                  marginBottom: 20,
                }}
              />

              <h3 style={{ color: '#fff', marginBottom: 14 }}>
                🍊 Fresh Fruit Juice
              </h3>

              <MenuItem name="Watermelon Juice" price="40" />
              <MenuItem name="Sweet Lime (Mosambi)" price="50" />
              <MenuItem name="Pineapple Juice" price="50" />
              <MenuItem name="Seasonal Fruit Juice" price="50" />
            </JuiceCard>

            {/* Milk & Shakes */}
            <JuiceCard delay="0.4s">
              <img
                src={PHOTOS.milkshake}
                alt=""
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 16,
                  marginBottom: 20,
                }}
              />

              <h3 style={{ color: '#fff', marginBottom: 14 }}>
                🥛 Milk & Milkshakes
              </h3>

              <MenuItem name="Pista Milk" price="60" />
              <MenuItem name="Kova Badam Milk" price="60" />
              <MenuItem name="Kova Rose Milk" price="60" />
              <MenuItem name="Badam Milk" price="40" />
              <MenuItem name="Rose Milk" price="40" />
              <MenuItem name="Pista Milk Shake" price="75" />
              <MenuItem name="Blueberry Milk Shake" price="75" />
              <MenuItem name="Oreo Milk Shake" price="70" />
              <MenuItem name="Black Current Shake" price="60" />
              <MenuItem name="Chocolate Shake" price="60" />
              <MenuItem name="Butter Scotch Shake" price="60" />
              <MenuItem name="Strawberry Shake" price="60" />
            </JuiceCard>

            {/* Soda */}
            <JuiceCard delay="0.5s">
              <img
                src={PHOTOS.soda}
                alt=""
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 16,
                  marginBottom: 20,
                }}
              />

              <h3 style={{ color: '#fff', marginBottom: 14 }}>
                🥤 Soda & Sharbath
              </h3>

              <MenuItem name="Nannari Sharbath" price="20" />
              <MenuItem name="Kush Nannari Sharbath" price="20" />
              <MenuItem name="Masala Soda" price="20" />
              <MenuItem name="Lemon Soda" price="20" />
              <MenuItem name="Orange Soda" price="20" />
              <MenuItem name="Lemon Juice" price="20" />
            </JuiceCard>

            {/* Ice Cream */}
            <JuiceCard delay="0.6s">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                <img
                  src={PHOTOS.icecream1}
                  alt=""
                  style={{
                    width: '100%',
                    height: 140,
                    objectFit: 'cover',
                    borderRadius: 14,
                  }}
                />

                <img
                  src={PHOTOS.icecream2}
                  alt=""
                  style={{
                    width: '100%',
                    height: 140,
                    objectFit: 'cover',
                    borderRadius: 14,
                  }}
                />
              </div>

              <h3 style={{ color: '#fff', marginBottom: 14 }}>
                🍦 Ice Creams
              </h3>

              <MenuItem name="Extra Ice Cream Scoop" price="10" />

              <p
                style={{
                  fontSize: 12,
                  color: 'rgba(56,239,125,0.75)',
                  marginTop: 12,
                }}
              >
                Available with shakes and dessert combinations.
              </p>
            </JuiceCard>

            {/* Mocktails */}
            <JuiceCard delay="0.7s">
              <img
                src={PHOTOS.fruit}
                alt=""
                style={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 16,
                  marginBottom: 20,
                }}
              />

              <h3 style={{ color: '#fff', marginBottom: 14 }}>
                🍹 Mocktails
              </h3>

              <MenuItem name="Any Mocktail" price="60" />
            </JuiceCard>
          </div>
        </div>

        <div
          style={{
            background: '#FF6B35',
            overflow: 'hidden',
            padding: '14px 0',
            marginTop: 48,
          }}
        >
          <div
            className="freshness-track"
            style={{
              display: 'flex',
              width: 'max-content',
            }}
          >
            {doubled.map((item, i) => (
              <span
                key={i}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '0 28px',
                  fontFamily: 'Poppins,sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}