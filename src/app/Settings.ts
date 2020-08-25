import {
    AppRole,
    IApiConfigurableHost,
    IApiSettings,
    ApiSettings,
    LoginMethod
} from 'etsoo-react';
import { DomUtils } from '@etsoo/shared';

// Labels
import zhLabels from '../i18n/zh-CN.json';
import enLabels from '../i18n/en-US.json';

/**
 * App settings interface for extending
 */
export interface IAppSettings extends IApiSettings {}

// Supported language
const supportedLanguages = [
    { name: 'en-US', label: 'English', labels: enLabels },
    { name: 'zh-CN', label: '简体中文', labels: zhLabels }
];

// Detected language
const { detectedLanguage } = DomUtils;

/**
 * App settings
 */
export const Settings: IAppSettings = {
    // Current language item, like en-US
    currentLanguage: DomUtils.getLanguage(supportedLanguages, detectedLanguage)
        ?.name,

    // Detected language
    detectedLanguage,

    // Login method
    method: LoginMethod.Web,

    // Application role
    role: AppRole.User,

    // Supported languages
    supportedLanguages,

    // Merge public configs
    ...((window as unknown) as IApiConfigurableHost).configs
};

/**
 * Update core api settings
 */
export const {
    context: LanguageStateContext,
    provider: LanguageStateProvider
} = ApiSettings.setup(Settings);
