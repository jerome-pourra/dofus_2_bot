import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ShowCellMessage } from "./ShowCellMessage";

export class ShowCellSpectatorMessage extends ShowCellMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4927;

	public playerName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ShowCellSpectatorMessage.protocolId;
    }

    public initShowCellSpectatorMessage(sourceId: number = 0, cellId: number = 0, playerName: string = ""): ShowCellSpectatorMessage
    {
        super.initShowCellMessage(sourceId,cellId);
        this.playerName = playerName;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ShowCellSpectatorMessage(output);
    }

    public serializeAs_ShowCellSpectatorMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ShowCellMessage(output);
        output.writeUTF(this.playerName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ShowCellSpectatorMessage(input);
    }

    private deserializeAs_ShowCellSpectatorMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerNameFunc(input);
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

}