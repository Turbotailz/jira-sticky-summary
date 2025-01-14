function updateHeader() {
  try {
    // Jira's selectors can be prone to change. If it stops working, look at the HTML
    const summaryElement = document.querySelector('[data-testid="issue.views.issue-base.foundation.summary.heading"]');
    const headerElement = document.querySelector('[data-component-selector="breadcrumbs-wrapper"] ol');

    if (summaryElement && headerElement) {

      const summaryText = summaryElement.innerText;

      // Check if there is already added summary to not create duplicates when the header rerenders due to Jira updates.
      const stickySummaryElement = headerElement.querySelector('#sticky-summary');

      if (stickySummaryElement) {
        stickySummaryElement.textContent = summaryText;

        console.log(`Updated Summary - ${summaryText}}`);

        return;
      }

      const container = document.createElement('span');
      container.id = 'sticky-summary';
      container.textContent = summaryText;

      headerElement.appendChild(container);

      console.log("Added Summary");
    }
  } catch (error) {
    console.error('OH NO')
    console.error(error)
  }
}

const style = document.createElement('style');
style.textContent = `
  #sticky-summary {
    display: flex;
    align-items: center;
    margin-left: .2rem;
    line-height: 20px;
  }
`;
document.head.appendChild(style);

// Update on page load.
updateHeader();

// Set up a MutationObserver to update the summary when the header is rerendered due to Jira.
const observer = new MutationObserver(mutationsList => {
  console.log('MUTATE')
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      setInterval(updateHeader, 500)
    }
  }
});

const headerObserverElement = document.querySelector('[data-testid="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container"]')

if (headerObserverElement) {
  observer.observe(headerObserverElement, { childList: true, subtree: true })
}
