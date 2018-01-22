declare module "react-native-tts" {

    interface TTSVoices {
        id: string;
        name: string;
        language: string;
        quality: number;
    }

    interface TTSPlayer {
        getInitStatus(): Promise<void>;

        setDucking(enabled: boolean): Promise<void>;
        setDefaultVoice(voiceId: string): Promise<void>;

        setDefaultRate(rate: number, skipTransform?: boolean): Promise<void>;

        setDefaultPitch(pitch: number): Promise<void>;

        setDefaultLanguage(language: boolean): Promise<void>;

        voices(): Promise<TTSVoices[]>;

        speak(utterance: string, voiceId?: string): Promise<number>;

        stop(onWordBoundary: boolean): Promise<boolean>;
        pause(onWordBoundary: boolean): Promise<boolean>;

        resume(): Promise<boolean>;
    }

    const TTSPlayer: TTSPlayer;
    export default TTSPlayer;
}