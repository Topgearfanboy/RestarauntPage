import * as React from "react";

import { Settings } from "../types";

export const SettingsContext = React.createContext<Settings | null>(null);
