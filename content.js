const style = document.createElement('style');
style.textContent = `
  [data-testid="issue-view-layout-templates-default.ui.foundation-content.foundation-content-wrapper"],
  [data-testid="issue-view-sticky-header-container.sticky-header"] + div {
    position: sticky;
    top: 32px;
    z-index: 98;
  }
  
  [data-testid="issue-view-layout-templates-default.ui.foundation-content.foundation-content-wrapper"]
  [data-testid="issue-field-summary.ui.issue-field-summary-inline-edit--container"],
  [data-testid="issue-view-sticky-header-container.sticky-header"] + div
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
  
  div:has(> div > [data-testid="issue.activity.comment"]) {
    top: 76px;
  }
  
  [data-testid="issue.views.issue-details.issue-modal.modal-dialog"] div:has(> div > [data-testid="issue.activity.comment"]) {
    top: 44px;
  }
  
  [data-testid="issue-view-layout-templates-views.ui.context.visible-hidden.ui.context-items"] summary {
    z-index: 95;
  }
`;
style.id = 'jira-sticky-summary-styles';
document.head.appendChild(style);
