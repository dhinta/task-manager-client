export interface iLoader {
    show: boolean
};

export interface iValidationRules {
    test: string;
}

export interface iModalConfig {
    cmpName: string;
    modalWidth: number;
    modalTitle: string;
    hasCloseBtn?: boolean;
}