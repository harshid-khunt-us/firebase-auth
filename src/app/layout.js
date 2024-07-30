import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@styles/globals.css';
import '@styles/main.scss';
import theme from '@theme/themeConfig';
import { ConfigProvider } from 'antd';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'spellchecker',
  description: 'spellchecker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
