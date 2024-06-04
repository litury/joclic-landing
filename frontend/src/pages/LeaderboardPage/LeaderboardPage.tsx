// LeaderboardPage.tsx
import React, {useEffect} from 'react';
import {
    Text,
    Cell,
    Badge,

} from '@telegram-apps/telegram-ui';
import {useBackButton} from "@tma.js/sdk-react";

interface Resume {
    id: number;
    name: string;
    jobIndex: number;
    appliedCount: number;
}

const resumes: Resume[] = [
    {
        id: 1,
        name: 'Frontend разработчик',
        jobIndex: 85,
        appliedCount: 10,
    },
    {
        id: 2,
        name: 'Frontend Vue',
        jobIndex: 72,
        appliedCount: 8,
    },
    {
        id: 3,
        name: 'Frontend React',
        jobIndex: 91,
        appliedCount: 15,
    },
    {
        id: 4,
        name: 'Frontend React',
        jobIndex: 91,
        appliedCount: 15,
    },
    {
        id: 5,
        name: 'Frontend React',
        jobIndex: 91,
        appliedCount: 15,
    },
    {
        id: 6,
        name: 'Frontend React',
        jobIndex: 91,
        appliedCount: 15,
    },
];

const placeholderStyle: React.CSSProperties = {
    backgroundColor: `var(--tg-theme-bg-color)`,
    marginBottom: '8px',
    textAlign: 'center' as const, // Указываем 'center' как константу
};


const cellStyle = {

    backgroundColor: `var(--tg-theme-bg-color)`,
};

const LeaderboardPage: React.FC = () => {
    const backButton = useBackButton();

    useEffect(() => {
        backButton.hide();

        return () => {
            backButton.show();
        }
    }, [])

    return (
        <>
            <Cell
                subhead={
                    <Text weight="2">
                        Рейтинг резюме
                    </Text>
                }
                style={placeholderStyle}
                description={"Рейтинг рассчитывается после 30 откликов"}
                subtitle="Сравните свой рейтинг с другими"
            />


            <div style={{marginBottom: 70, display: 'flex', flexDirection: 'column', gap: 8}}>
                {resumes.map((resume, index) => (

                        <Cell
                            before={index + 1}
                            after={<Badge type="number">{resume.jobIndex}</Badge>}
                            style={cellStyle}
                            description={`Всего просмотров ${resume.jobIndex}`}
                            subtitle={`Отправлено откликов: ${resume.appliedCount}`}
                        >
                            {resume.name}
                        </Cell>

                ))}
            </div>
        </>
    );
};

export {LeaderboardPage};