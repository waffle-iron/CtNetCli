export class Skill {
    constructor(
        public $key: string,
        public title: string,
        public level: string,
        public style: string,
        public percentage: number,
        public featured: boolean,
        public order: number,
        public dateCreated: string,
        public dateModified: string) {

    }
    static fromJson({$key, title, level, style, percentage, featured, order, dateCreated, dateModified}): Skill {
        return new Skill(
            $key,
            title,
            level,
            style,
            percentage,
            featured,
            order,
            dateCreated,
            dateModified);
    }
}