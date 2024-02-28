export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'imgurl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'feedback',
            title: 'Title',
            type: 'string'
        }
    ]
}