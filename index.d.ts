declare module "react-native-tts" {

    export interface TTSVoices {
        id: string;
        name: string;
        language: string;
        quality: number;
        latency?: number; // android only
        networkConnectionRequired?: boolean; // android only
        notInstalled?: boolean; // android only
    }

    export interface TTSListenerResult {
        utteranceId: number;
        location?: number; // tt-progress + ios only
        length?: number; // tt-progress + ios only
    }

    export type TTSPlayerListenerType = "tts-start" | 
                                "tts-finish" |
                                "tts-pause" |
                                "tts-resume" |
                                "tts-cancel" |
                                "tts-progress" | // ios only
                                "tts-error"; // android only
                                
    interface TTSPlayer {
        getInitStatus(): Promise<void>;

        setDucking(enabled: boolean): Promise<void>;
        setDefaultVoice(voiceId: string): Promise<void>;

        setDefaultRate(rate: number, skipTransform?: boolean): Promise<void>;

        setDefaultPitch(pitch: number): Promise<void>;

        setDefaultLanguage(language: boolean): Promise<void>;

        voices(): Promise<TTSVoices[]>;

        speak(utterance: string, voiceId?: string): Promise<number>;

        stop(onWordBoundary?: boolean): Promise<boolean>;
        pause(onWordBoundary?: boolean): Promise<boolean>;

        resume(): Promise<boolean>;

        addEventListener(type: TTSPlayerListenerType, handler: (result: TTSListenerResult) => void): void;
        removeEventListener(type: TTSPlayerListenerType, handler: (result: TTSListenerResult) => void): void;
    }

    const TTSPlayer: TTSPlayer;
    export default TTSPlayer;
}