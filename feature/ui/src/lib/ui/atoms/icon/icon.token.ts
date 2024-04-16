import { InjectionToken } from "@angular/core";
import { IconName } from "@ng-icons/core";

export const ICONS = new InjectionToken<Record<string, IconName>>("LUCIDE_ICONS");
