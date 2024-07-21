import { css } from 'lit';
const style = css`
      :host {
      display: block;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background-color: var(--background-color, #fff);
      color: var(--text-color, #000);
    }
    header, footer {
      background-color: var(--header-footer-bg-color, #333);
      color: var(--header-footer-text-color, #fff);
      padding: 1em;
      text-align: center;
    }
    main {
      display: flex;
      height: calc(100vh - 140px); /* Adjust based on header and footer height */
    }
    .sidebar {
      width: var(--sidebar-width, 250px);
      background-color: var(--sidebar-bg-color, #f4f4f4);
      padding: 1em;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
      overflow-y: auto;
    }
    .content {
      flex: 1;
      padding: 1em;
      overflow-y: auto;
    }
`;
export const componentStyles = [style];
