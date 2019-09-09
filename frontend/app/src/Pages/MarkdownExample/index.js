import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

import SAMPLE from './sample.md';
import ButtonLink from '../../components/ButtonLink';
import FaqGrid from '../../components/FaqGrid';

const MarkdownExamplePage = () => {
    const [sample, setSample] = useState('');

    useEffect(() => {
        /** Load sample.md on first mount */
        fetch(SAMPLE)
            .then(data => {
                return data.text();
            })
            .then(text => {
                setSample(text);
            });
    }, []);

    return (
        <div>
            <div style={{ height: '100px' }} />
            <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown cheatsheet</a>
            <h1>Sample markdown with basic react-markdown:</h1>
            <div style={{ border: '1px solid red', padding: '20px' }}>
                <ReactMarkdown source={sample} />
            </div>
            <h1>Sample markdown with custom renderers</h1>
            <div style={{ border: '1px solid blue', padding: '20px' }}>
                <ReactMarkdown
                    source={sample}
                    renderers={{
                        link: props => {
                            console.log('LINK PROPS', props);
                            if (props.href.length > 0 && props.href[0] === '$') {
                                const element = props.href.slice(1);
                                switch (element) {
                                    case 'FAQ':
                                        return <FaqGrid />;
                                    default:
                                        return null;
                                }
                            }
                            return <a href={props.href}>{props.children}</a>;
                        },
                        inlineCode: props => {
                            return <p>Custom renderer for code:</p>;
                        },
                        blockquote: props => {
                            return <div style={{ background: 'orange' }}>{props.children}</div>;
                        },
                        table: props => {
                            return <p>Table here</p>;
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default MarkdownExamplePage;
