import React from 'react';
import { useUiContext } from 'styles';

const Theme = () => {
  const { theme } = useUiContext();

  return (
    <div>
      ...Theme view...
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrast,
              }}
            >
              primary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrast,
              }}
            >
              secondary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.tertiary.main,
                color: theme.palette.tertiary.contrast,
              }}
            >
              tertiary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.error.main,
                color: theme.palette.error.contrast,
              }}
            >
              error
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.warning.main,
                color: theme.palette.warning.contrast,
              }}
            >
              warning
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.info.main,
                color: theme.palette.info.contrast,
              }}
            >
              info
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.success.main,
                color: theme.palette.success.contrast,
              }}
            >
              success
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.inverted.main,
                color: theme.palette.inverted.contrast,
              }}
            >
              inverted
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrast,
              }}
            >
              primary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.secondary.contrast,
              }}
            >
              secondary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.tertiary.dark,
                color: theme.palette.tertiary.contrast,
              }}
            >
              tertiary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.error.dark,
                color: theme.palette.error.contrast,
              }}
            >
              error
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.warning.dark,
                color: theme.palette.warning.contrast,
              }}
            >
              warning
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.info.dark,
                color: theme.palette.info.contrast,
              }}
            >
              info
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.success.dark,
                color: theme.palette.success.contrast,
              }}
            >
              success
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.inverted.dark,
                color: theme.palette.inverted.contrast,
              }}
            >
              inverted
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrast,
              }}
            >
              primary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.contrast,
              }}
            >
              secondary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.tertiary.light,
                color: theme.palette.tertiary.contrast,
              }}
            >
              tertiary
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.error.light,
                color: theme.palette.error.contrast,
              }}
            >
              error
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.warning.light,
                color: theme.palette.warning.contrast,
              }}
            >
              warning
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.info.light,
                color: theme.palette.info.contrast,
              }}
            >
              info
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.success.light,
                color: theme.palette.success.contrast,
              }}
            >
              success
            </div>
            <div
              style={{
                width: '100px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.inverted.light,
                color: theme.palette.inverted.contrast,
              }}
            >
              inverted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
