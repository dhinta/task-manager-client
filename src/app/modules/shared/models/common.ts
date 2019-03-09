export interface Loader {
    show: boolean;
}

export interface ValidationRules {
    test: string;
}

export interface ModalConfig {
    cmpName: string;
    modalWidth: number;
    modalTitle: string;
    hasCloseBtn?: boolean;
}

export interface ValidationMessage {
    message: string;
    error: boolean;
}

export interface DefaultDropDownSelection {
    id: string|number;
    text: string;
}

export interface Response {
    error: object;
    data?: any;
}
