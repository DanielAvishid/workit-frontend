import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Time, CloseRound, Check } from "/node_modules/monday-ui-react-core/src/components/Icon/Icons"
import { Icon } from 'monday-ui-react-core';

ChartJS.register(ArcElement, Tooltip, Legend,)

export function DoughnutChart({ group }) {
    const doneCount = group.tasks.filter((task) => task.status === 'ls103').length;
    const inProgressCount = group.tasks.length - doneCount;

    const data = {
        labels: ['Done', 'In Progress'],
        datasets: [
            {
                label: 'Tasks',
                data: [doneCount, inProgressCount],
                backgroundColor: ['#00c875', '#c4c4c4'],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <>
            {!doneCount && !inProgressCount ? (
                <>
                    <div className='big-icon empty  flex align-center justify-center'>
                        <Icon icon={CloseRound} />
                    </div>
                    <div className='flex justify-center'>
                        <span>No tasks</span>
                    </div>
                </>
            ) : !doneCount && inProgressCount ? (
                <>
                    <div className='big-icon all  flex align-center justify-center'>
                        <Icon icon={Check} />
                    </div>
                    <div className='flex justify-center'>
                        <span>All done</span>
                    </div>
                </>
            ) : doneCount && !inProgressCount ? (
                <>
                    <div className='big-icon nothing flex align-center justify-center'>
                        <Icon icon={Time} />
                    </div>
                    <div className='flex justify-center'>
                        <span>Nothing is done</span>
                    </div>
                </>
            ) : (
                <>
                    <Doughnut data={data} options={options}></Doughnut>
                    <div className='flex justify-center'>
                        <span>In progress</span>
                    </div>
                </>
            )}
        </>
    )
}
