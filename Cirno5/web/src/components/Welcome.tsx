import * as React from 'react';
import * as styles from './Welcome.css';

interface IWelcomeProps {
    text: string;
}

export class Welcome extends React.Component<IWelcomeProps> {
    public render(): JSX.Element {
        return <p className={styles.motherfucker}>{this.props.text} !!</p>;
    }
}
