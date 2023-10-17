const purple_1 = '#5e2bff';
const purple_2 = '#6a74fc';
const purple_3 = '#9397fa';
const purple_4 = '#a6a9ff';
const purple_5 = '#C4B3FF';
const blue_1 = '#abc4ff';
const blue_2 = '#ccf4fc';
const white_1 = '#f6f6f6';
const white_2 = '#dee2e6';
const white_3 = '#edecee';
const yellow_1 = '#f1a208';
const green_1 = '#97e02a';
const red_1 = '#ff0d6e';
const black_0 = `#15141b`;
const black_1 = '#343a40';
const black_2 = '#495057';
const black_3 = '#adb5bd';
const highlight = '#3C00FF35';

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: blue_2,
    cursorAccentColor: '#110f18',
    foregroundColor: white_3,
    backgroundColor: black_0,
    selectionColor: highlight,
    borderColor: black_0,
    fontWeightBold: 'bold',
    colors: {
      black: black_2,
      red: black_2,
      green: green_1,
      yellow: black_3,
      blue: blue_1,
      magenta: purple_5,
      cyan: purple_4,
      white: white_1,
      lightBlack: black_1,
      lightRed: red_1,
      lightGreen: green_1,
      lightYellow: yellow_1,
      lightBlue: purple_2,
      lightMagenta: purple_1,
      lightCyan: purple_3,
      lightWhite: white_2,
    },
    css: `
      ${config.css || ''}
      .tabs_title {
        display: flex;
        justify-content: center;
        gap: 4px;
        color: ${purple_2};
      }
      .tabs_title::before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='48' height='48' fill='white' fill-opacity='0.01' /><path d='M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M24 4L24 24' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M41 34L24 24' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M7 34L24 24' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M24 44V34' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M41 14L33 19' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M7 14L15 19' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /></svg>");
        margin-top: 3px;
        display: block;
        width: 12px;
        height: 12px;
      }
      .tab_active {
        color: ${purple_2};
      }
      .tab_text::before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='48' height='48' fill='white' fill-opacity='0.01' /><path d='M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z' stroke='%23dee2e6' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M24 4L24 24' stroke='%23dee2e6' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M41 34L24 24' stroke='%23dee2e6' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M7 34L24 24' stroke='%23dee2e6' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M24 44V34' stroke='%23dee2e6' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M41 14L33 19' stroke='%23dee2e6' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M7 14L15 19' stroke='%23dee2e6' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /></svg>");
        margin-top: 3px;
        display: block;
        width: 12px;
        height: 12px;
      }
      .tab_textActive::before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='48' height='48' fill='white' fill-opacity='0.01' /><path d='M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M24 4L24 24' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M41 34L24 24' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M7 34L24 24' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M24 44V34' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M41 14L33 19' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /><path d='M7 14L15 19' stroke='%236a74fc' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' /></svg>");
        margin-top: 3px;
        display: block;
        width: 12px;
        height: 12px;
      }
      .tab_text {
        display: flex;
        justify-content: center;
        gap: 4px;
      }
      .tab_textInner {
        position: static;
      }
    `,
  });
};
