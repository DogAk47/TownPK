// home.js - Logic for the Home Page

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;

    // Emojis mapping based on icon names in data.js
    const iconMap = {
        'ShoppingBag': '🛍️',
        'GraduationCap': '🎓',
        'Map': '🗺️',
        'Utensils': '🍱',
        'Users': '👥',
        'Bus': '🚌',
        'Clock': '🕰️'
    };

    // Hero Mouse Parallax Effect
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30; // Max shift 15px each side
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            hero.style.setProperty('--parallax-x', `${x}px`);
            hero.style.setProperty('--parallax-y', `${y}px`);
        });
        
        hero.addEventListener('mouseleave', () => {
            hero.style.setProperty('--parallax-x', `0px`);
            hero.style.setProperty('--parallax-y', `0px`);
        });
    }

    appData.categories.forEach(category => {
        const card = document.createElement('a');
        card.href = `category.html?id=${category.id}`;
        card.className = 'category-card';
        
        card.innerHTML = `
            <div class="card-icon">${iconMap[category.icon]}</div>
            <h3 class="card-title">${category.title}</h3>
            <p class="card-desc">點擊查看 ${category.title} 的詳細 PK 數據與指標分析。</p>
        `;
        
        grid.appendChild(card);
    });

    // Render Scoring Table
    const tableContainer = document.getElementById('scoringTableContainer');
    if (tableContainer) {
        let minxiongTotal = 0;
        let chiayiTotal = 0;
        
        let tableRows = '';
        appData.categories.forEach(category => {
            const metric = appData.metrics[category.id];
            if (metric && metric.scores) {
                const s1 = metric.scores.minxiong;
                const s2 = metric.scores.chiayi_city;
                minxiongTotal += s1;
                chiayiTotal += s2;
                
                tableRows += `
                    <tr>
                        <td>${iconMap[category.icon]} ${category.title}</td>
                        <td class="${s1 > s2 ? 'highlight-score' : ''}">${s1}</td>
                        <td class="${s2 > s1 ? 'highlight-score' : ''}">${s2}</td>
                    </tr>
                `;
            }
        });

        const tableHtml = `
            <table class="scoring-table">
                <thead>
                    <tr>
                        <th>評比指標</th>
                        <th>${appData.baseRegion.name}</th>
                        <th>${appData.compareRegion.name}</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
                <tfoot>
                    <tr>
                        <td>總體評分</td>
                        <td class="${minxiongTotal > chiayiTotal ? 'winner-score' : ''}"><span class="counter" data-target="${minxiongTotal}">${minxiongTotal}</span></td>
                        <td class="${chiayiTotal > minxiongTotal ? 'winner-score' : ''}"><span class="counter" data-target="${chiayiTotal}">${chiayiTotal}</span></td>
                    </tr>
                </tfoot>
            </table>
        `;
        tableContainer.innerHTML = tableHtml;

        // Render Radar Chart
        const ctx = document.getElementById('radarChart');
        if (ctx) {
            const labels = [];
            const data1 = [];
            const data2 = [];

            appData.categories.forEach(category => {
                const metric = appData.metrics[category.id];
                if (metric && metric.scores) {
                    labels.push(category.title);
                    data1.push(metric.scores.minxiong);
                    data2.push(metric.scores.chiayi_city);
                }
            });

            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: appData.baseRegion.name,
                            data: data1,
                            backgroundColor: 'rgba(74, 55, 40, 0.2)',
                            borderColor: '#4A3728',
                            pointBackgroundColor: '#4A3728',
                            borderWidth: 2,
                        },
                        {
                            label: appData.compareRegion.name,
                            data: data2,
                            backgroundColor: 'rgba(193, 154, 107, 0.2)',
                            borderColor: '#C19A6B',
                            pointBackgroundColor: '#C19A6B',
                            borderWidth: 2,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: { color: 'rgba(0,0,0,0.1)' },
                            grid: { color: 'rgba(0,0,0,0.1)' },
                            pointLabels: {
                                font: { size: 14, family: "'Inter', 'Noto Sans TC', sans-serif" },
                                color: '#666'
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 50,
                                suggestedMax: 100,
                                stepSize: 10
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: { size: 14, family: "'Inter', 'Noto Sans TC', sans-serif" },
                                color: '#333'
                            }
                        }
                    }
                }
            });
        }
    }
});
