import React, { useState } from 'react';
import { Button, ThemeWrapper } from 'material-ui-plus';
import './App.css';

const DEFAULT_THEME = 'default';

function App() {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    return (
        <ThemeWrapper theme={theme}>
            <div className="App">
                <h1>Theming Demo</h1>
                <h2>You are currently on {theme} theme</h2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setTheme('default')}
                >
                    Default Theme
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setTheme('happy')}
                >
                    Happy Theme
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setTheme('sad')}
                >
                    Sad Theme
                </Button>
            </div>
        </ThemeWrapper>
    );
}

export default App;
