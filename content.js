const style = document.createElement('style');
style.textContent = `
  [data-testid="issue-view-layout-templates-default.ui.foundation-content.foundation-content-wrapper"] {
    position: sticky;
    top: 32px;
    z-index: 98;
  }
  
  [data-testid="issue-view-layout-templates-default.ui.foundation-content.foundation-content-wrapper"]
  [data-testid="issue-field-summary.ui.issue-field-summary-inline-edit--container"] {
    background: var(--ds-surface, white);
  }
  
  [data-testid="issue.views.issue-details.issue-modal.modal-dialog"] [data-testid="issue-view-layout-templates-default.ui.foundation-content.foundation-content-wrapper"] {
    top: 0;
    background-color: var(--ds-surface-overlay, #FFFFFF);
  }
  
  [data-testid="issue.views.issue-details.issue-modal.modal-dialog"]
  [data-testid="issue-field-summary.ui.issue-field-summary-inline-edit--container"] {
    background-color: var(--ds-surface-overlay, #FFFFFF);
  }
`;
style.id = 'jira-sticky-summary-styles';
document.head.appendChild(style);
