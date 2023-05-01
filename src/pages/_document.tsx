import { LayoutHome } from '@/components/layouts/LayoutHome';
// import { Loading } from '@/components/ui';
// import { useGetStore } from '@/hooks';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    // const { ui } = useGetStore();

    return (
        <Html lang="es">
            <Head />
            <body>
                <LayoutHome>
                    <Main />
                    {/* <Loading isLoading={ui.isLoading} /> */}
                    <NextScript />
                </LayoutHome>
            </body>
        </Html>
    );
}
