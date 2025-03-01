import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { type NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const config: NextConfig = {
  // Next.jsの設定をここに追加
};

export default withVanillaExtract(config);
