# -*- coding: utf-8 -*-

import os
import sys
from modelcraft.reflections import DataFile
from PySide2.QtWidgets import (
    QApplication,
    QComboBox,
    QDialog,
    QFileDialog,
    QGroupBox,
    QHBoxLayout,
    QLabel,
    QPushButton,
    QVBoxLayout,
)


class ReflectionGroupBox(QGroupBox):
    def __init__(self):
        super().__init__("Reflection Data")

        layout = QVBoxLayout()
        self.setLayout(layout)

        button = QPushButton("Select File")
        button.clicked.connect(self.select_file)
        self.file_label = QLabel("No file selected.")
        hbox = QHBoxLayout()
        hbox.addWidget(button)
        hbox.addWidget(self.file_label)
        layout.addLayout(hbox)

        self.cell_label = QLabel("Cell:")
        self.spacegroup_label = QLabel("Spacegroup:")
        self.volume_label = QLabel("ASU Volume:")
        self.resolution_label = QLabel("Resolution Limits:")
        self.reflection_label = QLabel("Number of Reflections:")
        layout.addWidget(self.cell_label)
        layout.addWidget(self.spacegroup_label)
        layout.addWidget(self.volume_label)
        layout.addWidget(self.resolution_label)
        layout.addWidget(self.reflection_label)

        hbox = QHBoxLayout()
        hbox.addWidget(QLabel("Observations"))
        self.colin_fo_combo = QComboBox()
        hbox.addWidget(self.colin_fo_combo)
        layout.addLayout(hbox)

        hbox = QHBoxLayout()
        hbox.addWidget(QLabel("Free-R Flag"))
        self.colin_free_combo = QComboBox()
        hbox.addWidget(self.colin_free_combo)
        layout.addLayout(hbox)

        hbox = QHBoxLayout()
        hbox.addWidget(QLabel("Phases"))
        self.phases_combo = QComboBox()
        self.phases_combo.addItem("None - create phases from an MR model")
        hbox.addWidget(self.phases_combo)
        layout.addLayout(hbox)

    def select_file(self):
        path, _ = QFileDialog.getOpenFileName(
            caption="Select Reflection Data File",
            filter="MTZ Files [*.mtz] (*.mtz) ;; All Files [*.*] (*.*)",
            options=QFileDialog.Options(),
        )
        if path != "":
            self.file_label.setText(os.path.basename(path))
            hklin = DataFile(path)
            self.cell_label.setText(
                "Cell: %.3f  %.3f  %.3f  %.2f  %.2f  %.2f"
                % (hklin.cell.a, hklin.cell.b, hklin.cell.c, hklin.cell.alpha, hklin.cell.beta, hklin.cell.gamma)
            )
            self.spacegroup_label.setText("Spacegroup: " + hklin.spacegroup.hm)
            self.volume_label.setText(
                u"ASU Volume: %.0f Å<sup>3</sup>" % (hklin.cell.volume / len(hklin.spacegroup.operations()))
            )
            self.resolution_label.setText(
                u"Resolution limits: %.2f – %.2f Å" % (hklin.resolution_high, hklin.resolution_low)
            )
            self.reflection_label.setText("Number of Reflections: %d" % hklin.num_reflections)
            self.colin_fo_combo.clear()
            self.colin_fo_combo.addItems(hklin.fsigfs)
            self.colin_free_combo.clear()
            self.colin_free_combo.addItems(hklin.frees)
            self.phases_combo.clear()
            self.phases_combo.addItem("None - create phases from an MR model")
            self.phases_combo.addItems(hklin.abcds)
            self.phases_combo.addItems(hklin.phifoms)


class AsuContentsGroupBox(QGroupBox):
    def __init__(self):
        super().__init__("ASU Contents")


class PhasesGroupBox(QGroupBox):
    def __init__(self):
        super().__init__("Phases")


class OptionsGroupBox(QGroupBox):
    def __init__(self):
        super().__init__("Options")


class Window(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("ModelCraft")
        layout = QVBoxLayout()
        self.setLayout(layout)
        layout.addWidget(ReflectionGroupBox())
        layout.addWidget(AsuContentsGroupBox())
        layout.addWidget(PhasesGroupBox())
        layout.addWidget(OptionsGroupBox())


def main():
    if "CCP4" not in os.environ:
        sys.exit("CCP4 environment not set")
    app = QApplication(sys.argv)
    window = Window()
    window.show()
    sys.exit(app.exec_())


if __name__ == "__main__":
    main()
