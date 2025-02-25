export class CreateQuizzDto {
    id?: string;  // Optional because Prisma can generate it
    title: string;
    questionIds: string[]; // Array of Question IDs
    podcastId?: string; // Optional Podcast ID
    storyId?: string; // Optional Story ID
}