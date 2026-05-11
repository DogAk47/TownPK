// category.js - Logic for rendering Category Detail Page

document.addEventListener('DOMContentLoaded', () => {
    // Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');

    if (!categoryId || !appData.metrics[categoryId]) {
        document.getElementById('pageTitle').innerText = '找不到指定的指標';
        document.getElementById('splitLayout').style.display = 'none';
        return;
    }

    const metricData = appData.metrics[categoryId];
    const baseData = metricData.minxiong;
    const compareData = metricData.chiayi_city;

    // Set Headers
    document.getElementById('pageTitle').innerText = metricData.title;
    
    document.getElementById('baseName').innerText = appData.baseRegion.name;
    document.getElementById('baseSubtitle').innerText = appData.baseRegion.subtitle;
    
    document.getElementById('compareName').innerText = appData.compareRegion.name;
    document.getElementById('compareSubtitle').innerText = appData.compareRegion.subtitle;

    // Render Content based on category type
    const baseContainer = document.getElementById('baseContent');
    const compareContainer = document.getElementById('compareContent');

    if (categoryId === 'commercial') {
        renderCommercial(baseContainer, compareContainer, baseData, compareData);
    } else if (categoryId === 'education') {
        renderEducation(baseContainer, compareContainer, baseData, compareData);
    } else if (categoryId === 'tourism' || categoryId === 'food') {
        renderBentoGrid(baseContainer, baseData.spots);
        renderBentoGrid(compareContainer, compareData.spots);
    } else if (categoryId === 'population') {
        renderPopulation(baseContainer, compareContainer, baseData, compareData);
    } else if (categoryId === 'transportation') {
        renderTransportation(baseContainer, baseData);
        renderTransportation(compareContainer, compareData);
    }
    
    // Inject generic gallery at the top of each panel if present
    if (baseData.gallery) {
        baseContainer.insertAdjacentHTML('afterbegin', renderGalleryHtml(baseData.gallery));
    }
    if (compareData.gallery) {
        compareContainer.insertAdjacentHTML('afterbegin', renderGalleryHtml(compareData.gallery));
    }
});

// Render Functions
function renderGalleryHtml(gallery) {
    if (!gallery || gallery.length === 0) return '';
    const imagesHtml = gallery.map((imgSrc, index) => 
        `<img src="${imgSrc}" alt="Gallery image ${index + 1}" class="gallery-img">`
    ).join('');
    
    return `
        <!-- 照片位置區：可於 data.js 替換為您的照片 -->
        <div class="photo-gallery">
            ${imagesHtml}
        </div>
    `;
}
function renderComparisonBar(label, val1, val2, maxVal) {
    const pct1 = Math.min((val1 / maxVal) * 100, 100);
    const pct2 = Math.min((val2 / maxVal) * 100, 100);
    
    return `
        <div class="comparison-container">
            <div class="bar-label">
                <span>${label}</span>
            </div>
            <div style="display:flex; gap:2rem; width:100%;">
                <div style="flex:1;">
                    <div style="text-align:right; font-size:0.9rem; margin-bottom:4px; font-weight:bold;">${val1}</div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: 0%;" data-width="${pct1}%"></div>
                    </div>
                </div>
                <div style="flex:1;">
                    <div style="text-align:left; font-size:0.9rem; margin-bottom:4px; font-weight:bold;">${val2}</div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: 0%;" data-width="${pct2}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function triggerBarAnimation() {
    setTimeout(() => {
        document.querySelectorAll('.bar-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 100);
}

function renderCommercial(c1, c2, d1, d2) {
    const maxConv = Math.max(d1.convenienceStores, d2.convenienceStores);
    const maxSuper = Math.max(d1.supermarkets, d2.supermarkets);

    const barsHtml = `
        <h3 style="margin-bottom:1.5rem;">設施數量對比</h3>
        ${renderComparisonBar('便利商店 (家)', d1.convenienceStores, d2.convenienceStores, maxConv)}
        ${renderComparisonBar('中大型超市 (家)', d1.supermarkets, d2.supermarkets, maxSuper)}
        <hr style="margin:2rem 0; border:none; border-top:1px solid var(--border-color);">
    `;

    // We inject the shared bars into both or create a specific UI. 
    // Wait, the design is split layout. For comparison bars, it's better to show them split as well.
    // Let's adjust the rendering for split layout.
    
    c1.innerHTML = `
        <div class="comparison-container">
            <div class="bar-label"><span>便利商店數量</span><span>${d1.convenienceStores} 家</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0" data-width="${(d1.convenienceStores/maxConv)*100}%"></div></div>
        </div>
        <div class="comparison-container">
            <div class="bar-label"><span>中大型超市</span><span>${d1.supermarkets} 家</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0" data-width="${(d1.supermarkets/maxSuper)*100}%"></div></div>
        </div>
        <h3 style="margin: 2rem 0 1rem;">指標性連鎖品牌</h3>
        <ul class="data-list">
            ${d1.brands.map(b => `<li>${b}</li>`).join('')}
        </ul>
    `;

    c2.innerHTML = `
        <div class="comparison-container">
            <div class="bar-label"><span>便利商店數量</span><span>${d2.convenienceStores} 家</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0" data-width="${(d2.convenienceStores/maxConv)*100}%"></div></div>
        </div>
        <div class="comparison-container">
            <div class="bar-label"><span>中大型超市</span><span>${d2.supermarkets} 家</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0" data-width="${(d2.supermarkets/maxSuper)*100}%"></div></div>
        </div>
        <h3 style="margin: 2rem 0 1rem;">指標性連鎖品牌</h3>
        <ul class="data-list">
            ${d2.brands.map(b => `<li>${b}</li>`).join('')}
        </ul>
    `;
    
    triggerBarAnimation();
}

function renderEducation(c1, c2, d1, d2) {
    const maxSchools = Math.max(d1.totalSchools, d2.totalSchools);
    
    const renderContent = (data) => `
        <div class="comparison-container">
            <div class="bar-label"><span>總學校數量</span><span>${data.totalSchools} 所</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0" data-width="${(data.totalSchools/maxSchools)*100}%"></div></div>
        </div>
        <div style="display:flex; gap:1rem; margin-bottom:2rem;">
            <div style="flex:1; text-align:center; background:var(--bg-color); padding:1rem; border-radius:8px;">
                <div style="font-size:1.5rem; font-weight:bold; color:var(--primary-color);"><span class="counter" data-target="${data.highSchools}">${data.highSchools}</span></div>
                <div style="font-size:0.8rem; color:var(--text-secondary);">高中職</div>
            </div>
            <div style="flex:1; text-align:center; background:var(--bg-color); padding:1rem; border-radius:8px;">
                <div style="font-size:1.5rem; font-weight:bold; color:var(--primary-color);"><span class="counter" data-target="${data.middleSchools}">${data.middleSchools}</span></div>
                <div style="font-size:0.8rem; color:var(--text-secondary);">國中</div>
            </div>
            <div style="flex:1; text-align:center; background:var(--bg-color); padding:1rem; border-radius:8px;">
                <div style="font-size:1.5rem; font-weight:bold; color:var(--primary-color);"><span class="counter" data-target="${data.elementarySchools}">${data.elementarySchools}</span></div>
                <div style="font-size:0.8rem; color:var(--text-secondary);">國小</div>
            </div>
        </div>
        <h3 style="margin: 2rem 0 1rem;">大專院校</h3>
        <ul class="data-list">
            ${data.universities.map(u => `<li>${u}</li>`).join('')}
        </ul>
    `;
    
    c1.innerHTML = renderContent(d1);
    c2.innerHTML = renderContent(d2);
    
    triggerBarAnimation();
}

function renderBentoGrid(container, spots) {
    const gridHtml = `
        <div class="bento-grid">
            ${spots.map(spot => `
                <div class="bento-item">
                    <img src="${spot.image}" alt="${spot.name}">
                    <div class="bento-overlay">
                        <h4>${spot.name}</h4>
                        <p>${spot.desc}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    container.innerHTML = gridHtml;
}

function renderPopulation(c1, c2, d1, d2) {
    const maxDensity = Math.max(d1.density, d2.density);
    
    const renderContent = (data) => `
        <div class="data-box">
            <div class="data-value"><span class="counter" data-target="${data.density}">${data.density}</span></div>
            <div class="data-label">人口密度 (人/平方公里)</div>
        </div>
        
        <div class="comparison-container">
            <div class="bar-label"><span>密度對比</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0" data-width="${(data.density/maxDensity)*100}%"></div></div>
        </div>
        
        <div style="margin-top: 2rem;">
            <ul class="data-list">
                <li><strong>總人口數：</strong><span class="counter" data-target="${data.totalPopulation}">${data.totalPopulation}</span> 人</li>
                <li><strong>總面積：</strong>${data.area} 平方公里</li>
                <li><strong>人口趨勢：</strong>${data.growthTrend}</li>
                <li><strong>居住成本：</strong>${data.housingCost}</li>
            </ul>
        </div>
    `;
    
    c1.innerHTML = renderContent(d1);
    c2.innerHTML = renderContent(d2);
    triggerBarAnimation();
}

function renderTransportation(container, data) {
    container.innerHTML = `
        <h3 style="margin-bottom:1rem;">交通運輸節點</h3>
        <div style="margin-bottom:2rem;">
            <p style="font-weight:bold; margin-bottom:0.5rem; color:var(--primary-color);">鐵路</p>
            <ul class="data-list" style="margin-bottom:1rem;">
                ${data.trainStations.map(s => `<li>${s}</li>`).join('')}
            </ul>
            <p style="font-weight:bold; margin-bottom:0.5rem; color:var(--primary-color);">公路網</p>
            <ul class="data-list">
                ${data.highways.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
        <div class="map-container">
            <iframe src="${data.mapUrl}"></iframe>
        </div>
    `;
}
