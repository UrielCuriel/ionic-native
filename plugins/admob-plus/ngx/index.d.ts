import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export declare type AdUnitIDOption = string | {
    android: string;
    ios: string;
};
/**
 * @name AdMob Plus
 * @description
 * AdMob Plus is the successor of cordova-plugin-admob-free, which provides a cleaner API and build with modern tools.
 */
export declare class Banner {
    hide(): Promise<any>;
    show(opts: {
        id?: AdUnitIDOption;
    }): Promise<any>;
}
export declare class Interstitial {
    load(opts: {
        id?: AdUnitIDOption;
    }): Promise<any>;
    show(): Promise<any>;
}
export declare class RewardVideo {
    load(opts: {
        id?: AdUnitIDOption;
    }): Promise<any>;
    show(): Promise<any>;
}
export declare class AdMob extends IonicNativePlugin {
    banner: Banner;
    interstitial: Interstitial;
    rewardVideo: RewardVideo;
    setAppMuted(value: boolean): Promise<any>;
    setAppVolume(value: number): Promise<any>;
    on(event: string): Observable<any>;
}
