export interface ProjectInfo {
    id: number;
    title: string;
    stories: StoryInfo[];
}

export interface StoryInfo {
    id: number;
    title: string;
    tasks: TaskInfo[];
}

export interface TaskInfo {
    id: number;
    title: string;
    description: string;
}
