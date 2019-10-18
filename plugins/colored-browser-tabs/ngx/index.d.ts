import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Colored Browser Tabs
 * @description
 * This plugin opens Chrome Custom Tabs on Android or SafariViewController on iOS
 *
 * @usage
 * ```typescript
 * import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
 *
 *
 * constructor(private browserTabs: ColoredBrowserTabs) { }
 *
 * ...
 *
 *
 * this.browserTabs.openTab('www.example.url', '#ffffff')
 *   .subscribe()
 *
 * this.browserTabs.openTabWithAnimation('www.example.url', 'slide_x', '#ffffff')
 *   .subscribe()
 *
 * ```
 */
export declare class ColoredBrowserTabs extends IonicNativePlugin {
    /**
     * Call this method to open the tab
     * @param url - the url you want to open
     * @param color - the color with which you want to define the toolbar color
     * @return {Observable<any>} Returns a Observable that resolves when something happens
     */
    openTab(url: string, color?: string): Observable<any>;
    /**
     * Call this method to open the tab
     * @param url - the url you want to open
     * @param anim - the animation you want for enter and exit, you can choose between slide_x / slide_y and fade
     *        only works in Android, iOS just shows the default animation
     * @param color - the color with which you want to define the toolbar color
     * @return {Observable<any>} Returns a Observable that resolves when something happens
     */
    openTabWithAnimation(url: string, anim: string, color?: string): Observable<any>;
}
