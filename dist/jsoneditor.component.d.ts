import { ElementRef } from '@angular/core';
export declare class JsonEditorComponent {
    private rootElement;
    public editor;
    private optionsDiffer;
    private dataDiffer;
    private options;
    private data;
    constructor(rootElement: ElementRef);
    ngOnInit(): void;
    collapseAll(): void;
    destroy(): void;
    expandAll(): void;
    focus(): void;
    set(json: JSON): void;
    setMode(mode: string): void;
    setName(name: string): void;
    setSchema(schema: any): void;
    get(): JSON;
    getMode(): string;
    getName(): string;
    getText(): string;
}
