import {  } from 'react';

export const List = () => {
    const items = [
        {
            task: "Выучить Реакт",
            icon: "🎏",
            isCompleted: false,
        },
        {
            task: "Повторить кое-что",
            icon: "🎏",
            isCompleted: true,
        },
        {
            task: "Сделать что-то",
            icon: "🎏",
            isCompleted: false,
        },
    ]
    return (
      <div>
        {
            items.map((item, index) => {
                return (
                    <section key={index}>
                        <span>{item.icon}</span>
                        <h4>{item.task}</h4>
                    </section>
                )
            })
        }
      </div>
    );
}