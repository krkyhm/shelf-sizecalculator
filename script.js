document.getElementById('sizeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let width = parseInt(document.getElementById('width').value);
    let depth = parseInt(document.getElementById('depth').value);
    let height = parseInt(document.getElementById('height').value);
    
    // Add additional space
    width += 60;
    depth += 60;
    height += 120;

    // Available shelf sizes
    const shelfWidths = [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
    const shelfDepths = [200, 300, 400, 500, 600, 700, 800, 900];
    const shelfHeights = [750, 900, 1200, 1500, 1800, 2100];

    // Find the smallest available size that fits
    let recommendedWidth = shelfWidths.find(w => w >= width);
    let recommendedDepth = shelfDepths.find(d => d >= depth);
    let recommendedHeight = shelfHeights.find(h => h >= height);

    let resultMessage = `Recommended Shelf Size: `;
    
    if (!recommendedWidth) {
        resultMessage += `적절한 가로(폭) 사이즈가 없습니다. `;
    } else {
        resultMessage += `Width: ${recommendedWidth}, `;
    }

    if (!recommendedDepth) {
        resultMessage += `적절한 세로(깊이) 사이즈가 없습니다. `;
    } else {
        resultMessage += `Depth: ${recommendedDepth}, `;
    }

    if (!recommendedHeight) {
        resultMessage += `적절한 높이 사이즈가 없습니다. `;
    } else {
        resultMessage += `Height: ${recommendedHeight}`;
    }

    if (recommendedWidth && recommendedDepth) {
        let reinforcementCount = recommendedWidth < 800 ? 3 : 4;
        resultMessage += `\n+${recommendedDepth}합판보강대 ${reinforcementCount}개`;
    }

    document.getElementById('result').innerText = resultMessage;
});
