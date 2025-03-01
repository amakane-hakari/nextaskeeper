import { style } from '@vanilla-extract/css';

export const main = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '6rem'
});

export const container = style({
  zIndex: 10,
  maxWidth: '64rem',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: 'monospace',
  fontSize: '0.875rem',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex'
    }
  }
});

export const heading = style({
  fontSize: '2.25rem',
  fontWeight: 'bold',
  textAlign: 'center'
});

export const description = style({
  marginTop: '1rem',
  textAlign: 'center'
});
