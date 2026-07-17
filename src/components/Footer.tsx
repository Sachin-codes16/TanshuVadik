import React, { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  Palette                                                            */
/* ------------------------------------------------------------------ */
const CREAM = '#FAF8F5';
const DARK = '#2C2623';
const ACCENT = '#8F533C';
const ACCENT_DARK = '#723F2B';
const MUTED = '#615751';
const LIGHT = '#EBE4DC';

/* ------------------------------------------------------------------ */
/*  Inline SVG icons (no external deps)                                */
/* ------------------------------------------------------------------ */
type IconProps = { size?: number; color?: string };

const PhoneIcon: React.FC<IconProps> = ({ size = 14, color = ACCENT }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon: React.FC<IconProps> = ({ size = 14, color = ACCENT }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon: React.FC<IconProps> = ({ size = 14, color = ACCENT }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon: React.FC<IconProps> = ({ size = 14, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const FacebookIcon: React.FC<IconProps> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

const InstagramIcon: React.FC<IconProps> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<IconProps> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM2.4 9.5h5.16V21H2.4zM9.75 9.5h4.95v1.57h.07c.69-1.3 2.38-2.67 4.9-2.67 5.24 0 6.2 3.45 6.2 7.93V21h-5.16v-4.72c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.23-1.81 2.5V21H9.75z" transform="translate(-2 0)" />
  </svg>
);

const PinterestIcon: React.FC<IconProps> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0a12 12 0 0 0-4.373 23.178c-.035-.947-.007-2.086.235-3.115.26-1.104 1.732-7.34 1.732-7.34s-.442-.883-.442-2.19c0-2.05 1.19-3.582 2.67-3.582 1.258 0 1.866.944 1.866 2.077 0 1.265-.805 3.157-1.222 4.91-.347 1.467.735 2.663 2.18 2.663 2.618 0 4.396-3.362 4.396-7.35 0-3.03-2.04-5.296-5.75-5.296-4.19 0-6.804 3.124-6.804 6.615 0 1.204.354 2.05.912 2.706.256.302.29.424.198.77-.067.253-.219.87-.282 1.113-.093.354-.375.48-.69.35-1.926-.786-2.822-2.898-2.822-5.271 0-3.92 3.305-8.623 9.86-8.623 5.27 0 8.74 3.815 8.74 7.91 0 5.418-3.005 9.465-7.436 9.465-1.49 0-2.89-.804-3.368-1.72l-.917 3.593c-.332 1.216-.98 2.432-1.575 3.383A12 12 0 1 0 12 0z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Fonts                                                              */
/* ------------------------------------------------------------------ */
const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif";
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const quickLinks = [
  'About Us',
  'Collections',
  'Capabilities',
  'Sustainability',
  'Certifications',
  'Contact Us',
];

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
  { label: 'Pinterest', Icon: PinterestIcon },
];

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [success, setSuccess] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [sendHover, setSendHover] = useState(false);
  const [reqHover, setReqHover] = useState(false);
  const [bookHover, setBookHover] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setSuccess(true);
      setTimeout(() => {
        setEmailInput('');
        setSuccess(false);
      }, 3000);
    }
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: SERIF,
    fontSize: 20,
    fontWeight: 700,
    color: DARK,
    letterSpacing: '0.3px',
    margin: 0,
    marginBottom: 16,
  };

  return (
    <footer
      style={{
        background: CREAM,
        borderTop: `1px solid ${ACCENT}33`,
        padding: '0 0 40px 0',
        fontFamily: SANS,
        color: `${DARK}e6`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] items-stretch">
        {/* ---------------- Bestselling Collection CTA ---------------- */}
        <div
          style={{
            background: DARK,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 16,
          }}
          className="px-6 py-10 sm:px-10 sm:py-12 lg:px-10 lg:py-14"
        >
          <h4
            style={{
              fontFamily: SERIF,
              fontSize: 24,
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '0.3px',
            }}
          >
            Let's Build Your Next Bestselling Collection
          </h4>
          <p
            style={{
              fontSize: 12.5,
              color: `${LIGHT}cc`,
              lineHeight: 1.7,
              fontWeight: 300,
              margin: 0,
            }}
          >
            Whether you are launching a new brand or expanding your existing
            range, we are here to bring your vision to life.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
            <button
              onMouseEnter={() => setReqHover(true)}
              onMouseLeave={() => setReqHover(false)}
              style={{
                padding: '11px 18px',
                background: reqHover ? ACCENT_DARK : ACCENT,
                color: '#fff',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              Request Catalogue
            </button>
            <a
              href="mailto:info@tanshuvaidik.com.au?subject=Meeting%20Request"
              onMouseEnter={() => setBookHover(true)}
              onMouseLeave={() => setBookHover(false)}
              style={{
                padding: '11px 18px',
                background: bookHover ? '#fff' : 'transparent',
                color: bookHover ? DARK : '#fff',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.4)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              Book a Meeting
            </a>
          </div>
        </div>

        {/* ---------------- Right content area ---------------- */}
        <div
          style={{
            display: 'grid',
            alignItems: 'flex-start',
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-[280px_170px_210px] justify-between gap-8 lg:gap-10 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-8 lg:pb-1"
        >

        {/* ---------------- Stay Updated ---------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 style={headingStyle}>Stay Updated</h4>
          <p
            style={{
              fontSize: 12.5,
              color: MUTED,
              lineHeight: 1.7,
              fontWeight: 300,
              margin: 0,
              marginBottom: 16,
            }}
          >
            Subscribe to our newsletter for new arrivals, trends and exclusive
            insights.
          </p>

          {success ? (
            <div
              style={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 600,
                background: `${ACCENT}1a`,
                padding: 10,
                border: `1px solid ${ACCENT}4d`,
                width: '100%',
              }}
            >
              Subscribed! Check inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', width: '100%' }}>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email"
                style={{
                  flexGrow: 1,
                  minWidth: 0,
                  background: '#fff',
                  border: `1px solid ${ACCENT}40`,
                  fontSize: 12.5,
                  padding: '11px 12px',
                  color: DARK,
                  fontFamily: SANS,
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                onMouseEnter={() => setSendHover(true)}
                onMouseLeave={() => setSendHover(false)}
                style={{
                  background: sendHover ? '#fff' : ACCENT,
                  border: `1px solid ${ACCENT}`,
                  padding: '0 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background 0.2s ease',
                }}
              >
                <SendIcon color={sendHover ? ACCENT : '#fff'} />
              </button>
            </form>
          )}

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {socials.map(({ label, Icon }) => {
              const isHover = hovered === label;
              return (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: `1px solid ${isHover ? ACCENT : `${ACCENT}4d`}`,
                    color: isHover ? ACCENT : `${DARK}b3`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* ---------------- Quick Links ---------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 style={headingStyle}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {quickLinks.map((label) => {
              const isHover = hovered === `ql-${label}`;
              return (
                <a
                  key={label}
                  href="#"
                  onMouseEnter={() => setHovered(`ql-${label}`)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    fontSize: 12.5,
                    color: isHover ? ACCENT : MUTED,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        {/* ---------------- Contact Us ---------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h4 style={headingStyle}>Contact Us</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 12.5, color: MUTED }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PhoneIcon />
              <span>+61 2 9999 9166</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <MailIcon />
              <span>info@tanshuvaidik.com.au</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <MapPinIcon />
              <span>Panipat, Haryana, India</span>
            </div>
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;