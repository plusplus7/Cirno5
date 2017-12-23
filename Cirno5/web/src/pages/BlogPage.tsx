import * as React from 'react';

interface BlogPageProps {
    text: string;
}
export class BlogPage extends React.Component<BlogPageProps> {
    public render() {
        return (
            <div>{this.props.text}</div>
        );
    }
}