import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    PointElement,
    LineElement,
    ArcElement,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    PointElement,
    LineElement,
    ArcElement
);

const Analytics = ({ contract }) => {
    const [voteDistributionData, setVoteDistributionData] = useState([]);
    const [timeOfVotesData, setTimeOfVotesData] = useState([]);
    const [uniqueVoters, setUniqueVoters] = useState(0);

    useEffect(() => {
      const fetchAnalytics = async () => {
          const candidatesCount = await contract.candidatesCount();
          const voteDistribution = [];
          const voteTimes = [];
          const voterAddresses = new Set();
  
          for (let i = 1; i <= candidatesCount; i++) {
              const candidate = await contract.candidates(i);
              voteDistribution.push({ name: candidate.name, votes: Number(candidate.voteCount) });
          }
  
          const filter = contract.filters.Voted(); // Use the correct event name
          const events = await contract.queryFilter(filter);
  
          console.log(events); // To check if events are being fetched
  
          events.forEach(event => {
              const { voter, candidateId, timestamp } = event.args;
              voterAddresses.add(voter);
              voteTimes.push({ time: new Date(timestamp * 1000), candidateId: candidateId.toNumber() });
          });
  
          setVoteDistributionData(voteDistribution);
          setUniqueVoters(voterAddresses.size);
          setTimeOfVotesData(voteTimes);
      };
  
      if (contract) {
          fetchAnalytics();
      }
  }, [contract]);
  

    const voteDistributionChartData = {
        labels: voteDistributionData.map(c => c.name),
        datasets: [
            {
                label: '# of Votes',
                data: voteDistributionData.map(c => c.votes),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const timeOfVotesChartData = {
        labels: timeOfVotesData.map(d => d.time),
        datasets: [
            {
                label: 'Votes Over Time',
                data: timeOfVotesData.map(d => ({ x: d.time, y: d.candidateId })),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: voteDistributionData.map(c => c.name),
        datasets: [
            {
                label: 'Vote Distribution',
                data: voteDistributionData.map(c => c.votes),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold">Voting Analytics</h2>

            <h3 className="text-xl mt-4">Unique Voters: {uniqueVoters}</h3>

            <div className="mt-8">
                <h3 className="text-xl font-bold">Vote Distribution</h3>
                <Pie data={pieChartData} />
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold">Votes Over Time</h3>
                <Line data={timeOfVotesChartData} />
            </div>
        </div>
    );
};

export default Analytics;
