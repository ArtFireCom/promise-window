interface PromiseWindowOptionsConfig {
    noopener?: boolean;
    [key: string]: string | number | boolean;
}

interface PromiseWindowConfig {
    width?: number;
    height?: number;
    watcherDelay?: number;
    windowName?: string;
    window?: PromiseWindowOptionsConfig;
    onPostMessage?: (event: any) => void;
    onClose?: () => void;
    originRegexp?: RegExp;
    removeOpener?: boolean;
}

declare module "promise-window" {
    export default class PromiseWindow {
        public static open(uri: string, config?: PromiseWindowConfig): Promise<Window>;

        public constructor(uri: string, config?: PromiseWindowConfig);

        public open(): Promise<Window>;
    }
}
