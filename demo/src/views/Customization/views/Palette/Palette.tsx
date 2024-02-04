import React from 'react';
import { useUiContext } from 'styles';
import { View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const PaletteView = () => {
  const { theme } = useUiContext();

  return (
    <View title="Palette">
      <Article>
        <Section title="Default palette">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.5rem',
              }}
            >
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

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.5rem',
              }}
            >
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

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '.5rem',
              }}
            >
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
        </Section>

        <Section title="Border">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            <div
              style={{
                width: '4rem',
                height: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.palette.shape.border,
              }}
            ></div>
            <div
              style={{
                width: '4rem',
                height: '2rem',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.palette.shape.divider,
              }}
            ></div>
          </div>
        </Section>

        <Section title="Background">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            <div
              style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: theme.palette.background.primary,
              }}
            ></div>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderWidth: '1px',
                backgroundColor: theme.palette.background.secondary,
              }}
            ></div>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderWidth: '1px',
                backgroundColor: theme.palette.background.tertiary,
              }}
            ></div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderWidth: '1px',
                backgroundColor: theme.palette.background.secondary,
                border: `1px solid ${theme.palette.shape.border}`,
              }}
            ></div>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderWidth: '1px',
                backgroundColor: theme.palette.background.tertiary,
                border: `1px solid ${theme.palette.shape.border}`,
              }}
            ></div>
          </div>
        </Section>

        <Section title="Grey">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '.5rem',
            }}
          >
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[10],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              10
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[20],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              20
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[30],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              30
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[40],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              40
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[50],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              50
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[60],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              60
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[70],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              70
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[80],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              80
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[90],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              90
            </div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: theme.palette.grey[100],
                border: `1px solid ${theme.palette.shape.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              100
            </div>
          </div>
        </Section>

        <Section title="Common">
          <div>...todo</div>
        </Section>
      </Article>
    </View>
  );
};

export default PaletteView;
